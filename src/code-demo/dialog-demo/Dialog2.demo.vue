<demo>
函数式用法
</demo>
<template>
  <div>
    <Button @click="showDialog">一键打开对话框</Button>
  </div>
</template>

<script lang='ts'>
import Button from '../../lib/Button.vue';
import {openDialog} from '../../lib/openDialog';

export default {
  components: {
    Button,
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: '标题',
        content: '你好哇',
        ok() {
          console.log('确认');
        },
        close() {
          console.log('取消');
        }
      });
    };
    return { showDialog};
  }
};
</script>