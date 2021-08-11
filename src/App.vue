<template>
  <div>导航栏 |
    <router-link to="/">wbs</router-link>
    |
    <router-link to="/xxx">wbs2</router-link>
  </div>
  <hr>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
}
</script>
