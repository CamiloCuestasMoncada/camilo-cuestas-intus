<template>
  <nav class="navbar">
    <div class="navbar__menu">
      <div class="navbar__item">
        <router-link to="/games-on-sale">
          <button class="button button--primary">Tienda</button>
        </router-link>
      </div>
      <div class="navbar__item">
        <router-link to="/free-games-of-week">
          <button class="button button--info">Gratis por esta semana</button>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    
  },
};
</script>

<style scoped>
.navbar__menu {
  display: flex;
  justify-content: space-evenly;
}

.button--primary {
  background-color: #007bff47;
  color: #fff;
}

.button--info {
  background-color: #a017b84a;
  color: #fff;
}

@media (max-width: 576px) {
  .navbar__menu {
    margin: 5px;
    display: flex;
    flex-direction: column;
  }
  .navbar__item {
    padding: 4px;
  }
}
</style>
