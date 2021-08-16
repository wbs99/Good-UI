<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <Demo :component="Switch1Demo"/>
    <h4>用 disabled 实现禁用 switch 的功能</h4>
    <Demo :component="Switch2Demo"/>
  </div>
</template>

<script lang="ts">
import Switch1Demo from './Switch1.demo.vue';
import Switch2Demo from './Switch2.demo.vue';
import Demo from '../Demo.vue';

export default {
  components: {
    Demo
  },
  setup() {
    return {
      Switch1Demo,
      Switch2Demo,
    };
  }
};
</script>

<style lang='scss' scoped>
.demo {
  border: 1px solid #d9d9d9;
  margin: 16px 0 32px 0;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid #d9d9d9;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed #d9d9d9;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed #d9d9d9;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
    }
  }
}
</style>