<template>
  <button class="good-switch" @click="toggle"
          :class="{'good-checked':value}"
          :disabled="disabled">
    <span></span>
  </button>
  <div> {{ value }}</div>
</template>

<script lang='ts'>

export default {
  props: {
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false
    },
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value);
    };
    return {toggle};
  }
};
</script>

<style lang='scss'>
.good-switch {
  background: #bfbfbf;
  height: 22px;
  width: 44px;
  border-radius: 12px;
  border: none;
  position: relative;

  &[disabled] {
    cursor: not-allowed;
  }

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

  &.good-checked {
    background: #ee6666;
    > span {
      left: calc(100% - 20px);
    }
  }

  &:focus {
    outline: none;
  }

  &:active {
    > span {
      width: 22px;
    }
  }

  &.good-checked:active {
    > span {
      width: 22px;
      margin-left: -4px;
    }
  }
  &[disabled]{
    &:active{
      cursor: not-allowed;
    }
    >span{
      width: 18px;
    }
  }
}


</style>