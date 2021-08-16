<template>
  <h1>Dialog 对话框</h1>
  <h4>不能通过遮罩层关闭对话框，必须输入内容才可以通过确定关闭对话框</h4>
  <Demo :component="Dialog1Demo"/>
  <h4>可以通过遮罩层关闭对话框，不输入内容也可以通过确定关闭对话框</h4>
  <Demo :component="Dialog3Demo"/>
  <h4>引入 openDialog 打开一个 dialog</h4>
  <Demo :component="Dialog2Demo"/>

</template>

<script lang='ts'>
import Demo from '../Demo.vue';
import Dialog1Demo from './Dialog1.demo.vue'
import Dialog2Demo from './Dialog2.demo.vue'
import Dialog3Demo from './Dialog3.demo.vue'



export default {
  components: {
    Demo,
  },
  setup() {
    return {Dialog1Demo,Dialog2Demo,Dialog3Demo};
  }
};
</script>