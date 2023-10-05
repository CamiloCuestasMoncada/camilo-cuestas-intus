<template>
  <div>
    <HeaderGames />
    <router-view></router-view>
  </div>
</template>
<script>
import HeaderGames from "./components/HeaderGames.vue";

export default {
  components: {
    HeaderGames,
  },
};
</script>
<style scoped>
.Home {
  margin-top: 6em; /* Ajusta el margen superior para dejar espacio para el logo */
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
}
</style>
