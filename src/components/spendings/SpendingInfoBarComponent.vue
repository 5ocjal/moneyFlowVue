<template>
  <div class="c-info-bar">
    <div class="c-info-bar_progress" :style="setProgressBar"></div>
    <div class="c-info-bar_progress_label">{{ progresBar }}</div>
  </div>
</template>

<script>
export default {
  props: {
    cost: {
      type: Number,
      required: true,
    },
  },

  computed:{
      progresBar(){
          const percentage = this.cost / +this.$store.getters.getTotalSpendings *100;
          return percentage.toFixed(1) +'%';
      },

      setProgressBar(){
          return {width: this.progresBar}
      }
  },
}
</script>

<style>
.c-info-bar {
  margin: 20px 40px 10px 0;
  width: 100%;
  padding: 5px;
  background: rgb(146 151 179 / 13%);
  border-radius: 14px;
  box-shadow: inset 7px 7px 20px #36384142, inset -7px -7px 20px #5c5d6634;
  position: relative;
}

.c-info-bar_progress {
  width: 70%;
  height: 16px;
  border-radius: 14px;
  background-color: #ff8b4c;
  transition: 0.4s linear;
  transition-property: width, background-color;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25), inset 0 1px rgba(255, 255, 255, 0.1);
}

.c-info-bar_progress_label {
  position: absolute;
  display: flex;
  z-index: 1;
  left: 50%;
  top: 3px;
  font-size: 0.9rem;
}
</style>
