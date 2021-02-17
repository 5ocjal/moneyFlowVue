<template>
  <div class="mainbox c-create-user">
    <div v-if="createNew">
      <div class="u-title">Create new user</div>
      <form @submit.prevent="setNewUser" class="u-all-center">
        <div class="avatar">
          <img class="avatar__image" :src="userAvatar" alt="User profile photo" />
        </div>
        <div class="form-control u-all-center">
          <label for="userName" class="u-form-label">Enter your name:</label>
          <input id="userName" class="form-input u-mt10" name="userName" type="text" v-model="userName" autocomplete="off" minlength="3" />
        </div>
        <div class="form-control u-mb10 u-all-center">
          <label for="userGender" class="u-form-label">Gender:</label>
          <div>
            <label for="gender-m">Male</label>
            <input id="gender-m" name="userGender" type="radio" value="male" v-model="userGender" />
          </div>
          <div>
            <label for="gender-f">Female</label>
            <input id="gender-f" name="gender-f" type="radio" value="female" v-model="userGender" />
          </div>
        </div>
        <div class="form-control u-all-center">
          <label for="userBallance" class="u-form-label">Set your account ballance:</label>
          <input id="userBallance" class="form-input" name="userAccountBallance" step="0.01" min=0 type="number" v-model="userAccountBallance" required />
        </div>
        <div>
          <button-component css-class="btn__main">{{ btnTitle }}</button-component>
        </div>
      </form>
    </div>
    <div v-else>
      <div class="u-title">Login</div>
      <form @submit.prevent="loginUser" class="u-all-center">
        <div class="avatar">
          <img class="avatar__image" src="../../assets/images/avatar.jpeg" alt="User profile photo" />
        </div>
        <div class="form-control u-all-center">
          <label for="userName" class="u-form-label">Enter your name:</label>
          <input id="userName" class="form-input u-mt10" name="userName" type="text" v-model="userName" autocomplete="off" minlength="3" />
        </div>
        <div>
          <button-component css-class="btn__main"> {{ btnTitle }}</button-component>
        </div>
      </form>
    </div>
    <button-component css-class="btn__small" @click.native="switchMode()">{{ switchModeTitle }}</button-component>
  </div>
</template>

<script>
import ButtonComponent from '../layout/ButtonComponent.vue'

export default {
  components: { ButtonComponent },
  data() {
    return {
      userName: null,
      userGender: 'male',
      userAccountBallance: null,
      avatars: [],
      userAvatar: null,
      createNew: false,
      btnTitle: 'Login',
      switchModeTitle: 'Create',
    }
  },

  async created() {
    await this.getAvatars()
  },

  watch: {
    userGender() {
      this.setAvatarPic()
    },

    avatars() {
      this.setAvatarPic()
    },
  },

  methods: {
    switchMode() {
      this.createNew = !this.createNew
      if (this.createNew) {
        this.btnTitle = 'Create'
        this.switchModeTitle = 'Login'
      } else {
        this.btnTitle = 'Login'
        this.switchModeTitle = 'Create'
      }
    },

    loginUser() {
      this.$store.commit('loginUser', { value: this.userName})
    },

    setNewUser() {
      const newUser = { name: this.userName, balance: this.userAccountBallance, gender: this.userGender, avatar: this.userAvatar }
      this.$store.commit('createUser', { value: newUser })
      this.$router.push('/home').catch(() => {})
    },

    getAvatars() {
      fetch('https://tinyfac.es/api/users')
        .then((res) => res.json())
        .then((data) => (this.avatars = data))
    },

    setAvatarPic() {
      const currentGenderAvatars = this.avatars.filter((item) => item.gender === this.userGender)
      const randomImage = Math.floor(Math.random() * currentGenderAvatars.length)

      this.userAvatar = currentGenderAvatars[randomImage].avatars[2].url
    },
  },
}
</script>

<style scoped>
.c-create-user {
  padding: 2rem;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>
