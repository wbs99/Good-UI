<template>
  <button @click="toggle" :class="{active}"><span></span></button>
</template>

<script lang='ts'>
import {ref} from 'vue';

export default {
  setup() {
    const active = ref(false);
    const toggle = () => {
      active.value = !active.value;
    };
    return {active, toggle};
  }
};
</script>

<style lang='scss' scoped>
button {
  background: grey;
  height: 22px;
  width: 44px;
  border-radius: 12px;
  border: none;
  position: relative;

  span {
    position: absolute;
    top: 1.5px;
    left: 2px;
    width: 18px;
    height: 18px;
    background: white;
    border-radius: 12px;
  }
}

button.active {
  background: lightpink;
}

button.active > span {
  left: calc(100% - 20px);
}
</style>