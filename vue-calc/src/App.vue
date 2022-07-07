<template>
  <div id="app">
    <HomePage />
  </div>
</template>

<script>
import HomePage from "./views/HomePage.vue";

export default {
  components: {
    HomePage,
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
