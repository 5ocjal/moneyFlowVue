import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

Vue.use(Vuex)

const localStorage = window.localStorage
const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'

// I will move it to a better place soon :)
//#region mock data functions

const generateID = () => {
  return Math.random()
    .toString(36)
    .substr(2, 9)
}

const randomDate = () => {
  let start = new Date(2021, 0, 1)
  let end = new Date()
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  return moment(date).format('YYYY-MM-DD')
}
//#endregion

const getDefaultState = () => {
  return {
    user: {
      name: null,
      balance: 0,
      gender: null,
      avatar: null,
      incomings: [],
      spendings: [{ id: generateID(), title: 'This app purchase', cost: 1.99, note: lorem, date: randomDate() }],
    },
  }
}

export default new Vuex.Store({
  state: getDefaultState(),
  mutations: {
    loginUser(state, user) {
      const setUser = JSON.parse(localStorage.getItem(user.value))
      if (setUser) {
        Object.assign(state.user, setUser)
      } else {
        alert('User does not exist')
      }
    },
    createUser(state, user) {
      const alreadyExists = JSON.parse(localStorage.getItem(user.value.name))
      if (!alreadyExists) {
        Object.assign(state.user, user.value)
        localStorage.setItem(user.value.name, JSON.stringify(state.user))
      } else {
        alert('User already exists, please login')
      }
    },
    addNewSpending(state, newItem) {
      newItem.value.id = generateID()
      state.user.spendings.push(newItem.value)
      this.dispatch('saveState', state.value)
    },

    updateSpending(state, updateItem) {
      state.user.spendings = state.user.spendings.map((item) => (item.id === updateItem.value.id ? updateItem.value : item))
      this.dispatch('saveState', state.value)
    },

    deleteSpending(state, deleteItem) {
      state.user.spendings = state.user.spendings.filter((item) => {
        return item.id !== deleteItem.value.id
      })
      this.dispatch('saveState', state.value)
    },

    resetState(state) {
      Object.assign(state, getDefaultState())
    },
  },
  actions: {
    saveState(state) {
      const save = state.state
      localStorage.setItem(save.user.name, JSON.stringify(save.user))
    },
  },
  getters: {
    getUser() {
      return this.user
    },

    getUserBalance(state) {
      const balance = +state.user.balance
      const spendings = +state.user.spendings.reduce((a, b) => a + (b.cost || 0), 0).toFixed(2)
      const incomings = +state.user.incomings.reduce((a, b) => a + (b.cost || 0), 0).toFixed(2)

      return balance + incomings - spendings
    },

    getUserSpendings(state) {
      return state.user.spendings.sort((a, b) => (a.date < b.date ? 1 : -1))
    },

    getTotalSpendings(state) {
      return state.user.spendings.reduce((a, b) => a + (b.cost || 0), 0).toFixed(2)
    },

    getTotalIncomings(state) {
      return state.user.incomings.reduce((a, b) => a + (b.cost || 0), 0).toFixed(2)
    },
  },
  modules: {},
})
