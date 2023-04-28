<template>
  <div class="popover" @click.stop="toggleVisible">
    <div class="content-wrapper" @click.stop v-if="visible">
      <slot name="content" />
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const visible = ref(false)

const toggleVisible = () => {
  visible.value = !visible.value
  setTimeout(() => {
    if (visible.value === true) {
      let x = () => {
        visible.value = false
        document.removeEventListener("click", x)
      }
      document.addEventListener("click", x)
    }
  }, 0)
}
</script>

<style lang="scss" scoped>
.popover {
  margin-top: 64px;
  display: inline-block;
  vertical-align: top;
  position: relative;
  .content-wrapper {
    position: absolute;
    border: 1px solid red;
    bottom: 100%;
    left: 0;
  }
}
</style>
