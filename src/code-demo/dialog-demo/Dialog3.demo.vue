<demo>
常规用法
</demo>
<template>
  <div>
    <Button @click="toggle">显示对话框</Button>
    <Dialog v-model:visible="x" :closeOnClickOverlay="true"
            :ok="f1">
      <template v-slot:title>
        <strong>标题</strong>
      </template>
      <template v-slot:content>
        <strong>加粗的内容</strong>
        <div>普通的内容</div>
      </template>
    </Dialog>
  </div>
</template>

<script lang='ts'>
import Dialog from '../../lib/Dialog.vue';
import Button from '../../lib/Button.vue';
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
      return true;
    };

    return {x, toggle, f1, };
  }
};
</script>