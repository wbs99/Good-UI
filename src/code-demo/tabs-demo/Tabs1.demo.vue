<demo>
常规使用
</demo>
<template>
  <Tabs v-model:selected="x">
    <Tab title="Tabs1">Tabs1 的内容</Tab>
    <Tab title="Tabs2">Tab2 的内容</Tab>
    <Tab title="Tabs3">Tab3 的内容</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../../lib/Tabs.vue'
import Tab from '../../lib/Tab.vue'
import {
  ref
} from 'vue'
export default {
  components: {
    Tabs,
    Tab
  },
  setup() {
    const x = ref('Tabs2')
    return {
      x
    }
  }
}
</script>