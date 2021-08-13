<template>
  <Button @click="toggle">显示对话框</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="false"
          :ok="f1" >
    <div>一行字</div>
  </Dialog>
</template>

<script lang='ts'>
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';

export default {
  components: {
    Button,
    Dialog
  },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return false;
    };
    return {x, toggle, f1};
  }
};
</script>

<style lang='scss' scoped>

</style>