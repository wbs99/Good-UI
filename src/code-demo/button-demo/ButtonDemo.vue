<template>
  <h1>Button 按钮</h1>
  <Demo :component="Button1Demo"/>
  <h4>按钮有大、中、小三种尺寸。通过设置 size 为 big small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中</h4>
  <Demo :component="Button2Demo"/>
  <h4>使用 level 属性，用不同颜色代码不同 level 的按钮。若不设置 level ，则为普通按钮</h4>
  <Demo :component="Button3Demo"/>
  <h4>禁用按钮，点击无反应</h4>
  <Demo :component="Button4Demo"/>
  <h4>加载中按钮，loading 属性表示正在加载</h4>
  <Demo :component="Button5Demo"/>
</template>

<script lang='ts'>
import Button from '../../lib/Button.vue';
import Demo from '../Demo.vue';
import Button1Demo from './Button1.demo.vue';
import Button2Demo from './Button2.demo.vue';
import Button3Demo from './Button3.demo.vue';
import Button4Demo from './Button4.demo.vue';
import Button5Demo from './Button5.demo.vue';


export default {
  components: {Demo, Button},
  setup() {
    const onClick = () => {
      console.log('你好');
    };
    return {onClick, Button1Demo, Button2Demo, Button3Demo, Button4Demo, Button5Demo};
  }
};
</script>