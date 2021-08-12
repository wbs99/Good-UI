<template>
  <button @click="toggle" :class="{checked:value}">
    <span></span>
  </button>
  <div> {{ value }}</div>
</template>

<script lang='ts'>

export default {
  props: {
    value: Boolean
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value);
    };
    return {toggle};
  }
};
</script>

<style lang='scss' scoped>
button {
  background: #bfbfbf;
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
    transition: all 250ms;
  }
}

button.checked {
  background: deeppink;
}

button.checked > span {
  left: calc(100% - 20px);
}

button:focus {
  outline: none;
}
button:active{
  > span{
    width: 22px;
  }
}
button.checked:active{
  > span{
    width: 22px;
    margin-left:-4px;
  }
}
</style>