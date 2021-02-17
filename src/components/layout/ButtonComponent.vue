<template>
  <component :is="btnTag" v-bind="btnAttribute" @click="backAction(action)">
    <slot></slot>
    <slot name="iconSlot"><i :class="icon" ></i></slot>
  </component>
</template>

<script>
export default {
  computed: {
    btnTag() {
      return this.path ? 'router-link' : 'button'
    },

    btnAttribute() {
      let atribute = {
        class: this.cssClass,
      }

      switch (this.btnTag) {
        case 'button':
          Object.assign(atribute, {
            action: this.action,
            icon: this.icon,
          })
          break

        case 'router-link':
          Object.assign(atribute, {
            to: this.path,
            activeClass: `${this.cssClass}_active`,
          })
          break
      }
      return atribute
    },
  },
  props: {
    title: {
      type: String,
    },
    cssClass: {
      type: String,
      default: 'btn__element',
    },
    path: {
      type: String,
      default: null,
      required: false,
    },
    action: {
      type: String,
      default: '',
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
  },

  methods: {
    backAction() {
      this.$emit(this.action)
    },
  },
}
</script>

<style>
.btn__element {
  padding: 0.2rem 1.2rem;
  text-decoration: none;
  color: rgb(113 119 144 / 78%);
  border-bottom: 2px solid transparent;
  transition: 0.8s;
  background: transparent;
  margin: 0 1rem;
}

.btn__element:hover {
  color: #f9fafb;
  transition: 0.8s;
}

.btn__element_active {
  color: #f9fafb;
  background-color: #d322ca;
  border-radius: 20px;
  backdrop-filter: blur(20px);
  transition: 0.3s;
}

.btn__main {
  width: 120px;
  background-color: transparent;
  border: none;
  padding: 8px 26px;
  color: #f9fafb;
  border: 2px solid #f9fafb;
  border-radius: 20px;
  margin: 1.2rem;
  cursor: pointer;
  transition: 0.8s;
  white-space: nowrap;
}

.btn__main:hover {
  background-color: #d322ca;
  border: 2px solid #d322ca;
  width: 130px;
}

.btn__main_active {
  background-color: #bb28c0;
  border: 2px solid #d322ca;
}

.btn__small {
  background-color: transparent;
  border: none;
  color: rgb(113 119 144 / 78%);
  margin: 0.7rem;
  cursor: pointer;
  transition: 0.8s;
  white-space: nowrap;
}

.btn__small:hover {
  color: #f9fafb;
}

.btn__icon {
  font-size: 1.1rem;
  background-color: transparent;
  border: none;
  outline: none;
  color: rgb(113 119 144 / 78%);
  margin: .7rem;
  cursor: pointer;
  transition: 0.8s;
  white-space: nowrap;
}

.btn__icon:hover {
  color: #f9fafb;
}


</style>
