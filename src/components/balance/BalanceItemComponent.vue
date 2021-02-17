<template>
  <div class="c-ballance_item">
    <div id="gridIcon" >
      <i :class="icon"></i>
    </div>
    <div id="gridTitle">{{ title }}:</div>
    <div id="gridBalance">${{ balance }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    balance: {
      type: Number,
      required: true,
      default: 0,
    },
  },
}
</script>

<style>
.c-ballance_item {
  display: grid;
  grid-template-columns: 0.4fr 2.3fr 0.4fr;
  grid-template-rows: 1fr;
  gap: 0px 10px;
  grid-template-areas: 'icon titleText balance';
  width: 100%;
}
#gridIcon {
  grid-area: icon;
}
#gridTitle {
  grid-area: titleText;
}
#gridBalance {
  grid-area: balance;
}
</style>
