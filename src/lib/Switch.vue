<template>
  <button><span></span></button>
</template>

<script lang='ts'>

</script>

<style lang='scss' scoped>
button {
  background: lightpink;
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

button:hover > span {
  left: calc(100% - 20px);
}
</style>