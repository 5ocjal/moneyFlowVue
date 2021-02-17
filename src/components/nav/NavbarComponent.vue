<template>
  <header class="navbar">
    <ul class="u-no-list-style">
      <li v-for="item in navItems" :key="item.title">
        <button-component :css-class='item.cssClass' :path="item.path">{{ item.title }}</button-component>
      </li>
    </ul>
  </header>
</template>

<script>
import ButtonComponent from '../layout/ButtonComponent.vue'
export default {
  components: { ButtonComponent },
  data(){
    return {
      navItems: [
        {id: 0, title: 'Home', path: '/home', cssClass: 'btn__element'},
        {id: 0, title: 'Spendings', path: '/spendings', cssClass: 'btn__element'},
        {id: 0, title: 'Revenue', path: '/revenue', cssClass: 'btn__element'},
      ],
      activeBtn: ''
    }
  }
}
</script>

<style>
.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 55px;
  width: 100%;
  border-bottom: 1px solid rgba(113 119 144 / 25%);
  white-space: nowrap;
}
</style>
