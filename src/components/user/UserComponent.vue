<template>
  <div class="c-user-component">
    <div class="avatar">
      <img class="avatar__image" :src="$store.state.user.avatar" alt="User profile photo" />
    </div>
    <div class="u-subtitle">
      {{ $store.state.user.name }}
    </div>
    <balance-component></balance-component>
    <logout-component></logout-component>
  </div>
</template>

<script>
import BalanceComponent from '../balance/BalanceComponent.vue'
import LogoutComponent from './LogoutComponent.vue'
export default {
  components: { BalanceComponent, LogoutComponent },
}
</script>

<style>
.c-user-component {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
