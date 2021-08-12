<template>
  <button class="gulu-button"
          :class="{[`theme-${theme}`]:theme}">
    <slot/>
  </button>
</template>

<script lang='ts'>
export default {
  props: {
    theme: {
      type: String,
      default: 'button'
    }
  }
};
</script>

<style lang='scss' scoped>
.gulu-button {
  box-sizing: border-box;
  height: 32px;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: #333;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-shadow: 0 1px 0 fade-out(black, 0.95) & + & {
    margin-left: 8px;
  }

  &:hover, &:focus {
    color: #40a9ff;
    border-color: #40a9ff;
  }
  &:focus{
    outline: none;
  }
  &::-moz-focus-inner{
    border:0;
  }
}
</style>