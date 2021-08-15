<template>
  <h1>基础用法</h1>
  <Button @click="toggle">显示对话框</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="false"
          :ok="f1">
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
      <strong>加粗的内容</strong>
      <div>普通的内容</div>
    </template>
  </Dialog>
  <h1>一句话显示对话框</h1>
  <Button @click="showDialog">一句话打开对话框</Button>
</template>

<script lang='ts'>
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';
import { openDialog } from '../lib/openDialog';

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
    const showDialog=()=>{
      openDialog({
        title:'标题',
        content:'你好哇',
        ok(){
          console.log('确认')
        },
        close(){
          console.log('取消');
        }
      })
    }
    return {x, toggle, f1,showDialog};
  }
};
</script>

<style lang='scss' scoped>

</style>