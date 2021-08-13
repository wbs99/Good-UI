<template>
  <button class="good-button"
          :class="{[`good-theme-${theme}`]:theme}">
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

<style lang='scss'>
.good-button {
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
  box-shadow: 0 1px 0 fade-out(black, 0.95);

  & + & {
    margin-left: 8px;
  }

  &:hover, &:focus {
    color: deeppink;
    border-color: deeppink;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.good-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: deeppink;

    &:hover, &:focus {
      color: lighten(deeppink, 5%)
    }
  }

  &.good-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover, &:focus {
      background: darken(deeppink, 5%);
    }
  }
}
</style>