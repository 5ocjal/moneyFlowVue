<template>
  <div>
    <!-- #TODO this control panel should in the future be a separate component that can be reuse it in revenue -->
    <div class="control_panel">
      <div class="control_panel_label">Total spending: ${{ totalSpendings }}</div>
      <div>
        <button-component :icon="actionIcon" css-class="btn__small" @click.native="switchView"> <template></template>{{ actionText }} </button-component>
      </div>
    </div>
    <div class="c-spendings_table" v-if="!addingNew">
      <div v-for="spending in getSpendings" :key="spending.id">
        <spending-item-component @updateItem="updateItem" :spending="spending"></spending-item-component>
      </div>
    </div>
    <div v-else>
      <spending-create-item-component @newItemAdded="switchView" :updateSpending="itemToUpdate"></spending-create-item-component>
    </div>
  </div>
</template>

<script>
import ButtonComponent from '../layout/ButtonComponent.vue'
import SpendingCreateItemComponent from './SpendingCreateItemComponent.vue'
import SpendingItemComponent from './SpendingItemComponent.vue'
export default {
  components: { ButtonComponent, SpendingItemComponent, SpendingCreateItemComponent },

  data() {
    return {
      addingNew: false,
      itemToUpdate: null,
      icons: {
        addItem: 'fas fa-plus-circle',
        back: 'fas fa-arrow-circle-left',
      },
    }
  },

  computed: {
    totalSpendings() {
      return +this.$store.getters.getTotalSpendings
    },

    useIcon() {
      return this.addingNew ? this.icons.back : this.icons.addItem
    },

    getSpendings() {
      return this.$store.getters.getUserSpendings
    },

    actionIcon() {
      return this.addingNew ? this.icons.back : this.icons.addItem
    },

    actionText() {
      return this.addingNew ? 'Back to list' : 'Add new'
    },
  },

  methods: {
    switchView() {
      if (this.itemToUpdate) {
        this.itemToUpdate = null
      }
      this.addingNew = !this.addingNew
    },

    updateItem(value) {
      this.switchView()
      this.itemToUpdate = value
    },
  },
}
</script>

<style>
.control_panel {
  display: flex;
  width: 100%;
  align-items: center;
  margin: 0.5rem 0;
  justify-content: space-between;
}

.control_panel_label {
  color: rgb(113 119 144 / 78%);
  font-size: 0.9rem;
  margin-left: 10px;
}
.c-spendings_table {
  display: block;
}
</style>
