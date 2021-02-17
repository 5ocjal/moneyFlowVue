<template>
  <div class="mainbox">
    <div v-if="user.name">
      <main>
        <div class="left__block">
          <user-component></user-component>
        </div>
        <div class="content__container">
          <navbar-component></navbar-component>
          <router-view />
        </div>
      </main>
    </div>
    <div v-else>
      <create-user-component></create-user-component>
    </div>
  </div>
</template>

<script>
import NavbarComponent from './components/nav/NavbarComponent.vue'
import CreateUserComponent from './components/user/CreateUserComponent.vue'
import UserComponent from './components/user/UserComponent.vue'

export default {
  components: { NavbarComponent, UserComponent, CreateUserComponent },

  computed: {
    user() {
      return this.$store.state.user
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

::-webkit-scrollbar {
  display: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

::-webkit-calendar-picker-indicator {
  filter: invert(1);
  margin-right: 10px;
}

* {
  outline: none;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  color: #f9fafb;
  background-image: url('./assets/images/bgd.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2em;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

main {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  height: 90vh;
}

.mainbox {
  background-color: rgba(16 18 27 / 40%);
  max-width: 1250px;
  max-height: 860px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  border-radius: 14px;
  backdrop-filter: blur(20px);
  font-size: 15px;
  font-weight: 500;
}
.left__block {
  flex-basis: 340px;
  border-right: 1px solid rgba(113 119 144 / 25%);
  padding: 26px;
  overflow: auto;
  flex-shrink: 0;
}

.content__container {
  color: #f9fafb;
  padding: 20px 40px;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: rgba(16 18 27 / 40%);
}

.form-input {
  height: 35px;
  display: flex;
  width: 80%;
  max-width: 300px;
  border: 1px solid rgba(128, 128, 128, 0.377);
  border-radius: 20px;
  background-color: #14162b85;
  font-family: 'Poppins', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  text-align: center;
  margin: 10px;
  box-shadow: 0 0 0 2px rgba(134, 140, 160, 0.02);
  color: #f9fafb;
}

.textarea-input {
  display: flex;
  width: 100%;
  height: 150px;
  border: 1px solid rgba(128, 128, 128, 0.377);
  border-radius: 14px;
  background-color: #14162b85;
  font-family: 'Poppins', sans-serif;
  font-size: 0.85rem;
  font-weight: 300;
  padding: 10px 20px;
  margin: 10px;
  box-shadow: 0 0 0 2px rgba(134, 140, 160, 0.02);
  color: #f9fafb;
}

.avatar {
  height: 150px;
  width: 150px;
  margin: 1.2rem;
}

.avatar__image {
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border: 4px solid #f9fafb;
  object-fit: cover;
}

.u-title {
  font-size: 1.8rem;
  font-weight: 500;
  color: #d322ca;
  margin: 0.6rem;
  font-weight: 800;
  font-size: 1.2rem;
}

.u-subtitle {
  color: #f9fafb;
  font-weight: 500;
  font-size: 1.4rem;
}

.u-info-text {
  color: rgb(113 119 144 / 78%);
  font-weight: 300;
  font-size: 0.7rem;
}

.u-form-label {
  color: #bdbfc0;
  font-size: 0.9rem;
}

.u-row {
  width: 100%;
  font-size: 1rem;
  cursor: pointer;
  margin: 0.6rem 0;
  border-bottom: 1px solid rgba(113 119 144 / 25%);
  padding: 0.5rem 0;
  transition: 800ms all ease;
}

.u-row:hover {
  color: #d322ca;
  padding-left: 0.3rem;
}

.u-mv10 {
  margin: 10px 0;
}

.u-mr10 {
  margin-right: 10px;
}

.u-ml20 {
  margin-left: 20px;
}

.u-mt3 {
  margin-top: 3px;
}

.u-mt10 {
  margin-top: 10px;
}

.u-mb10 {
  margin-bottom: 10px;
}

.u-primary-color {
  color: #d322ca;
}

.u-all-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.u-no-list-style {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.u-card-title {
  font-size: 0.8rem;
  color: #f9fafb;
  text-align: center;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(113 119 144 / 25%);
}

.u-card-label {
  color: rgb(113 119 144 / 78%);
  font-size: 0.8rem;
  margin-top: 5px;
}

.u-card-note {
  padding: 0.5rem;
  font-size: 0.7rem;
  font-weight: 400;
}

.u-view-mode-label {
  color: rgb(113 119 144 / 78%);
  font-size: 0.9rem;
  margin: 10px 0 15px 0;
}

.u-separator {
  border-top: 1px solid rgba(113 119 144 / 25%);
  padding: 20px;
}

a {
  color: inherit;
  text-decoration: none;
  background: transparent;
}
</style>
