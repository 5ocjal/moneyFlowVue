<template>
  <div class="c-balance-component">
    <div v-for="item in getBalanceInfo" :key="item.title" class="u-row">
      <router-link :to="item.path">
        <balance-item-component :title="item.title" :icon="item.icon" :balance="item.balance"></balance-item-component>
      </router-link>
    </div>
  </div>
</template>

<script>
import BalanceItemComponent from './BalanceItemComponent.vue'
export default {
  components: { BalanceItemComponent },

  computed: {
    getBalanceInfo() {
      const balanceItems = [
        { id: 0, title: 'Account', icon: 'fas fa-piggy-bank', balance: +this.$store.getters.getUserBalance, path: '/home' },
        { id: 1, title: 'Spendings', icon: 'fas fa-money-bill-wave', balance: +this.$store.getters.getTotalSpendings, path: '/spendings' },
        { id: 2, title: 'Incomings', icon: 'fas fa-hand-holding-usd', balance: +this.$store.getters.getTotalIncomings, path: '/revenue' },
      ]
      return balanceItems
    },
  },
}
</script>

<style>
.c-balance-component {
  margin-top: 5rem;
  width: 70%;
}
</style>
