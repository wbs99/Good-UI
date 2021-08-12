<template>
  <button><span></span></button>
</template>

<script lang='ts'>

</script>

<style lang='scss' scoped>
  button{
    background: lightpink;
    height: 22px;
    width: 44px;
    border-radius: 11px;
    border:none;
    position: relative;
    span{
      position: absolute;
      top:2px;
      left: 2px;
      width: 18px;
      height: 18px;
      background: white;
      border-radius:12px;
    }
  }
</style>