<template>
  <div class="c-logout-component">
    <div v-if="!exitMsg">
      <button-component css-class="btn__small" action="logout" @logout="confirmLogout">Logout</button-component>
    </div>
    <div v-else>
      <div class="u-info-text u-mv10">
        Are you sure you want to log out?
      </div>
      <div class="message_view">
        <button-component css-class='btn__icon' :icon="icons.cancel" action="cancel" @cancel="confirmLogout"></button-component>
        <button-component css-class='btn__icon' :icon="icons.confirm" action="do-logout" @do-logout="doLogout"></button-component>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from '../layout/ButtonComponent.vue'
export default {
  components: { ButtonComponent },

  data() {
    return {
      exitMsg: false,
      icons: {
        confirm: 'far fa-check-circle',
        cancel: 'far fa-window-close',
      },
    }
  },

  methods: {
    confirmLogout() {
      this.exitMsg = !this.exitMsg
    },

    doLogout() {
      this.$store.commit('resetState')
    },
  },
}
</script>

<style>
.c-logout-component {
  position: absolute;
  bottom: 1rem;
  border-top: 1px solid rgba(113 119 144 / 25%);
}

.message_view {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
