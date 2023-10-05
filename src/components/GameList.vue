<template>
  <div class="select-container">
    <label for="sortByPrice">Ordenar por precio:</label>
    <select v-model="sortByPrice" id="sortByPrice">
      <option value="">Seleccionar</option>
      <option value="asc">Menor precio</option>
      <option value="desc">Mayor precio</option>
    </select>
  </div>
  <div class="game-list">
    <div v-for="game in gamesSortedByPrice" :key="game.id" class="game-item">
      <div class="game-card">
        <button @click="addToFavorites(game)" class="small-round-button">
          <i class="fas fa-heart small-icon"></i>
        </button>
        <p class="game-title">{{ game.title }}</p>
        <a :href="game.url" target="_blank">
          <img
            :src="game.keyImages?.[2]?.url"
            alt="Game Image"
            class="game-image"
          />
        </a>
        <p
          :style="{
            color: 'black',
            fontSize: '16px',
            backgroundColor: 'rgb(200, 242, 215)',
          }"
        >
          <i class="fas fa-dollar-sign"></i>
          {{ game.currentPrice }}
        </p>

        <button @click="openModal(game)" class="button-mas-info">
          Más info
        </button>
      </div>
    </div>
    <GameModal
      :show-modal="showModal"
      :game="selectedGame"
      @update:show-modal="showModal = $event"
    >
      <template v-slot:description>
        <p>Descripción del juego: {{ selectedGame.description }}</p>
      </template>
      <template v-slot:publisher>
        <p>Empresa: {{ selectedGame.publisherName }}</p>
      </template>
    </GameModal>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import GameModal from "./GameModal.vue";
import { useFavoriteGames } from "./../composables/useFavoriteGames";
export default {
  props: {
    games: Array,
  },
  setup(props) {
    const { addFavorite } = useFavoriteGames();
    const sortByPrice = ref("");

    const sortGamesByPrice = (games, order) => {
      if (order === "asc") {
        return games.slice().sort((a, b) => a.currentPrice - b.currentPrice);
      } else if (order === "desc") {
        return games.slice().sort((a, b) => b.currentPrice - a.currentPrice);
      } else {
        return games; // No se aplica ordenamiento
      }
    };

    const gamesSortedByPrice = computed(() =>
      sortGamesByPrice(props.games, sortByPrice.value)
    );

    const addToFavorites = (game) => {
      addFavorite(game);
    };
    const showModal = ref(false);
    const selectedGame = ref(null);

    const openModal = (game) => {
      selectedGame.value = game;
      showModal.value = true;
    };

    return {
      sortByPrice,
      gamesSortedByPrice,
      showModal,
      selectedGame,
      openModal,
      addToFavorites,
    };
  },
  components: {
    GameModal,
  },
};
</script>

<style scoped>
.select-container{
  margin-bottom: 30px;
}
.game-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

.game-item {
  transition: transform 0.2s, box-shadow 0.2s;
}

.game-card {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.322);
  transition: transform 0.2s, box-shadow 0.2s;
  background-color: #e4dfd842;
}

.game-card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.favorite {
  background-color: rgba(
    95,
    12,
    77,
    0.481
  ); /* Cambia el color de fondo para tarjetas favoritas */
}

.game-title {
  font-size: 16px;
  margin: 8px 0;
  font-weight: bold;
}

.game-image {
  max-width: 100%;
  height: auto;
}

.small-round-button {
  width: 30px;
  height: 35px;
  border-radius: 50%;
  background-color: #cfc2e1;
  color: rgb(81, 53, 121);
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.small-icon {
  font-size: 16px;
}

.small-round-button:hover::after {
  content: "Agregar a favoritos";
  position: absolute;
  background-color: #5514607d;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  left: 50%;
  transform: translateX(-50%);
  bottom: calc(100% + 5px);
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  pointer-events: none;
}

.small-round-button:hover::after {
  opacity: 1;
}

.button-mas-info {
  background-color: rgba(240, 248, 255, 0.57);
  color: rgb(117, 25, 148);
}
</style>
