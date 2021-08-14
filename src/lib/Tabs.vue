<template>
  <div class="good-tabs">
    <div class="good-tabs-nav">
      <div class="good-tabs-nav-item" :class="{selected:title===selected}" v-for="(title,index) in titles" :key="index">{{ title }}</div>
    </div>
    <div class="good-tabs-content">
      <component class="good-tabs-content-item" v-for="(c,index) in defaults" :is="c" :key="index"/>
    </div>
  </div>
</template>

<script lang='ts'>
import Tab from './Tab.vue';

export default {
  props:{
    selected:{
      type:String
    }
  },
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab');
      }
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    return {
      defaults, titles
    };
  }
};

</script>

<style lang='scss'>
.good-tabs {
  &-nav {
    display: flex;
    color: #333;
    border-bottom: 1px solid #d9d9d9;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: deeppink;
      }
    }
  }

  &-content {
    padding: 8px 0;
  }
}


</style>