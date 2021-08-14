<template>
  <div class="good-tabs">
    <div class="good-tabs-nav" ref="container">
      <div class="good-tabs-nav-item"
           :class="{selected:title===selected}"
           v-for="(title,index) in titles" :key="index"
           :ref="el => { if (el) navItems[index] = el }"
           @click="select(title)">
        {{ title }}
      </div>
      <div class="good-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="good-tabs-content">
      <component class="good-tabs-content-item" :is="current" :key="current.props.title"/>
    </div>
  </div>
</template>

<script lang='ts'>
import Tab from './Tab.vue';
import {computed, onMounted, onUpdated, ref} from 'vue';

export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    //TS 并不知道下面写的 div 是什么类型，这里的意思 ref 中的数组就是 HTMLDiv元素的数组（泛型语法）
    const navItems = ref<HTMLDivElement[]>([]);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const x = () => {
      const divs = navItems.value;
      const result = divs.filter(div => div.classList.contains('selected'))[0];
      const {width} = result.getBoundingClientRect();
      indicator.value.style.width = width + 'px';
      const containerLeft = container.value.getBoundingClientRect().left;
      const divLeft = result.getBoundingClientRect().left;
      const left = divLeft - containerLeft;
      indicator.value.style.left = left + 'px';
    };
    onMounted(x);
    onUpdated(x);
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab');
      }
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const current = computed(() => {
      return defaults.filter((tag) => {
        return tag.props.title === props.selected;
      })[0];
    });
    const select = (title) => {
      context.emit('update:selected', title);
    };
    return {
      defaults, titles, current, select, navItems, indicator, container
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
    position: relative;

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

    &-indicator {
      position: absolute;
      height: 3px;
      background: blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}


</style>