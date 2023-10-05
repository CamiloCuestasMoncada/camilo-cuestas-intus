<template>
  <div class="header">
    <router-link to="/">
      <img src="./../assets/logo_home.png" alt="Logo" class="logo" />
    </router-link>
    <button @click="openFavoritesModal" class="favorites-button">
      <span class="favorites-count">{{ favoriteCount }}</span>
    </button>
  </div>

  <FavoritesModal :show="showModal" @close="closeFavoritesModal" />
</template>

<script>
import { ref, computed } from "vue";
import FavoritesModal from "./../components/FavoritesModal.vue";
import { useFavoriteGames } from "./../composables/useFavoriteGames";

export default {
  components: {
    FavoritesModal,
  },
  setup() {
    const { favoriteCount } = useFavoriteGames();
    const showModal = ref(false);

    const openFavoritesModal = () => {
      showModal.value = true;
    };

    const closeFavoritesModal = () => {
      showModal.value = false;
    };

    return {
      favoriteCount,
      openFavoritesModal,
      closeFavoritesModal,
      showModal,
    };
  },
};
</script>

<style scoped>
/* Estilos para el header */
.logo {
  padding: 7px;
  will-change: filter;
  transition: filter 300ms;
  position: fixed;
  top: 0;
  left: 0;
  max-width: 70px;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #c41ceeaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #3333332a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  z-index: 100;
}

.logo {
  width: 100px;
  height: auto;
}

.favorites-button {
  background-color: rgb(116, 28, 156);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  outline: none;
}

.favorites-count {
  font-size: 14px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .header {
  width: 94vw;
}
}
</style>
