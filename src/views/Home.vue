<template>
  <div>
    <div class="wrapper">
      <Topnav/>
      <div class="banner">
        <h1>Good UI</h1>
        <h2>一个厉害的 UI 框架</h2>
        <p class="actions">
          <a href="https://github.com/wbs99?tab=repositories">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="ads">
      <svg class="icon">
        <use xlink:href="#icon-Vue"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-ts"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-lights"></use>
      </svg>
    </div>

  </div>
</template>
w
<script lang="ts">
import Topnav from '../components/Topnav.vue';

export default {
  components: {Topnav}
};
</script>

<style lang='scss' scoped>
.wrapper {
  background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
}
.ads{
  >svg{
    width: 64px;
    height: 64px;
  }
}

.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: pink;
      color: black;
      display: inline-block;
      border-radius: 4px;
      padding: 8px 24px;

      &:hover {
        text-decoration: none;
      }
    }
  }
}

</style>