<template>
  <div class="c-spending-item">
    <div class="new_item">
      <form @submit.prevent="takeAction" class="u-all-center">
        <div class="u-view-mode-label">{{ viewMode }}</div>
        <div class="grid-container u-mv10 u-separator">
          <div class="gridInputs">
            <div class="form-control">
              <label for="title" class="titleLabel u-card-label u-ml20">Title:</label>
              <input id="title" class="titleInput form-input" name="title" type="text" v-model="title" minlength="3" autocomplete="off" required />
            </div>

            <div class="form-control">
              <label for="cost" class="costLabel u-card-label u-ml20">Cost:</label>
              <input id="cost" class="costInput form-input" name="cost" type="number" v-model="cost" step="0.01" min="0" required />
            </div>

            <div class="form-control">
              <label for="date" class="dateLabel u-card-label u-ml20">Date:</label>
              <input id="date" class="dateInput form-input" name="date" type="date" :formatter="formatDate" v-model="date" required />
            </div>
          </div>
          <div class="gridTextarea">
            <div class="textAreaInput">
              <div class="form-control">
                <label for="note" class="dateLabel u-card-label u-ml20">Note:</label>
                <textarea id="note" class="noteInput textarea-input" name="cost" type="date" v-model="note" />
              </div>
            </div>
            <div class="gridButtons">
              <button-component css-class="btn__small">Save</button-component>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import ButtonComponent from '../layout/ButtonComponent.vue'
export default {
  components: { ButtonComponent },

  props: {
    updateSpending: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      title: null,
      note: null,
      cost: null,
      date: moment(new Date()).format('YYYY-MM-DD'),
      viewMode: 'Add new spending',
    }
  },

  created() {
    this.setValueToUpdate()
  },

  computed: {
    formatDate(value) {
      return moment(value).format('YYYY-MM-DD')
    },
  },

  methods: {
    takeAction() {
      this.viewMode === 'Add new spending' ? this.addNewSpending() : this.updateThisSpending()
    },

    addNewSpending() {
      const newItem = { title: this.title, note: this.note, cost: +this.cost, date: this.date }
      this.$store.commit('addNewSpending', { value: newItem })
      this.$emit('newItemAdded')
    },

    updateThisSpending() {
      const newItem = { id: this.updateSpending.id, title: this.title, note: this.note, cost: +this.cost, date: this.date }
      this.$store.commit('updateSpending', { value: newItem })
      this.$emit('newItemAdded')
    },

    setValueToUpdate() {
      if (!this.updateSpending) return
      this.viewMode = 'Edit spending'
      this.title = this.updateSpending.title
      this.cost = this.updateSpending.cost
      this.note = this.updateSpending.note
      this.date = this.updateSpending.date
    },
  },
}
</script>

<style>
.new_item {
  display: flex;
  padding: 10px 18px;
  width: 100%;
  height: 100%;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: 'gridInputs gridTextarea';
}

.gridInputs {
  grid-area: gridInputs;
}

.gridTextarea {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.7fr 0.2fr;
  gap: 0px 0px;
  grid-template-areas:
    'textAreaInput'
    'gridButtons';
  grid-area: gridTextarea;
}

.textAreaInput {
  grid-area: textAreaInput;
}
.gridButtons {
  grid-area: gridButtons;
  text-align: center;
}
</style>
