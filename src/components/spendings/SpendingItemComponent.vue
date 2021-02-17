<template>
  <div class="c-spending-item">
    <div class="item_content">
      <div class="u-card-title">
        {{ spending.title }}
      </div>
      <div class="card-grid">
        <div class="gridGraph">
          <div class="graphLabel u-card-label">Percentage of all expenses:</div>
          <div class="graphValue">
            <spending-info-bar-component :cost="spending.cost"></spending-info-bar-component>
          </div>
        </div>
        <div class="gridDate">
          <div class="dateLabel u-card-label">Date:</div>
          <div class="dateValue">{{ spending.date }}</div>
        </div>
        <div class="gridCost">
          <div class="costLabel u-card-label">Cost:</div>
          <div class="costValue">${{ spending.cost }}</div>
        </div>
        <div class="gridNote"><button-component css-class="btn__small" @click.native="showNote = !showNote">{{showNote ? 'Hide note' : 'Show note'}}</button-component></div>
        <div class="gridButtons">
          <div class="editButton"><button-component css-class="btn__icon" action='update' @update='updateItem' :icon="icons.edit"></button-component></div>
          <div class="deleteButton"><button-component css-class="btn__icon" action="delete" @delete='deleteItem' :icon="icons.delete"></button-component></div>
        </div>
      </div>
      <div v-if="this.showNote">
        <div class="u-card-label">Spending note:</div>
        <div class="u-card-note">
          {{ spending.note ? spending.note : 'There are no details about this purchase'}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from '../layout/ButtonComponent.vue'
import SpendingInfoBarComponent from './SpendingInfoBarComponent.vue'
export default {
  components: { ButtonComponent, SpendingInfoBarComponent },
  props: {
    spending: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      showNote: false,
      icons: {
        delete: 'far fa-trash-alt',
        edit: 'far fa-edit',
      },
    }
  },

  methods: {
    updateItem(){
      this.$emit('updateItem', this.spending);
    },
    deleteItem(){
      this.$store.commit('deleteSpending', { value: this.spending})
    }
  }
}
</script>

<style>
.c-spending-item {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgb(146 151 179 / 13%);
  margin: 5px 0;
  border-radius: 14px;
  border: 1px solid rgba(16 18 27 / 40%);
  transition: .3s;
}

.item_content {
  display: flex;
  flex-direction: column;
  padding: 10px 18px;
  width: 100%;
  height: 100%;
}

.c-spending-item:hover {
  background-color: rgb(146 151 179 / 23%);
}

.card-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 0.7fr 0.2fr;
  grid-template-rows: 0.5fr 1.5fr;
  gap: 0px 0px;
  grid-template-areas:
    'gridDate gridCost gridNote gridButtons'
    'gridGraph gridGraph gridGraph gridButtons';
}

.gridGraph {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 1.5fr;
  gap: 0px 0px;
  grid-template-areas:
    'graphLabel'
    'graphValue';
  grid-area: gridGraph;
}

.graphLabel {
  grid-area: graphLabel;
}

.graphValue {
  grid-area: graphValue;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gridDate {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 1.5fr;
  gap: 0px 0px;
  grid-template-areas:
    'dateLabel'
    'dateValue';
  grid-area: gridDate;
}

.dateLabel {
  grid-area: dateLabel;
}

.dateValue {
  grid-area: dateValue;
}

.gridCost {
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 1.5fr;
  gap: 0px 0px;
  grid-template-areas:
    'costLabel'
    'costValue';
  grid-area: gridCost;
}

.costLabel {
  grid-area: costLabel;
}

.costValue {
  grid-area: costValue;
}

.gridNote {
  display: flex;
  grid-area: gridNote;
  align-items: center;
}

.gridButtons {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 0.2fr;
  grid-template-rows: 0.5fr 0.5fr;
  gap: 0px 0px;
  grid-template-areas:
    'editButton'
    'deleteButton';
  grid-area: gridButtons;
}

.editButton {
  grid-area: editButton;
}

.deleteButton {
  grid-area: deleteButton;
}
</style>
