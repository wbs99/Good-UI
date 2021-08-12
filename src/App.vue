<template>
  <router-view/>
</template>

<script lang="ts">
import {provide, ref} from 'vue'
export default {
  name: 'App',
  setup(){
    const asideVisible= ref(false)
    provide('asideVisible',asideVisible) //取名为 xxx ，内容就是 asideVisible
  }
}
</script>
