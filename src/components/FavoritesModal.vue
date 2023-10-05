<template>
  <div class="modal" v-if="show">
    <div class="modal-content">
      <span @click="closeModal" class="close-button">X</span>
      <h2>Tus juegos favoritos</h2>
      <ul class="favorite-list">
        <li v-for="game in favoriteGames" :key="game.id">
          {{ game.title }}
          <button @click="removeFavorite(game.id)">Eliminar</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useFavoriteGames } from './../composables/useFavoriteGames';

export default {
  props: {
    show: Boolean,
  },
  setup(props, { emit }) {
    const showModal = ref(props.show);
    const { favoriteGames, removeFavorite } = useFavoriteGames();

    watch(
      () => props.show,
      (newValue) => {
        showModal.value = newValue;
      }
    );

    const closeModal = () => {
      showModal.value = false;
      emit('close');
    };

    return {
      showModal,
      closeModal,
      favoriteGames,
      removeFavorite,
    };
  },
};
</script>

<style scoped>

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background-color: rgba(59, 10, 59, 0.853);
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  max-height: 80vh; 
  overflow-y: auto; 
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.favorite-list {
  list-style-type: none;
  padding: 0;
}

.favorite-list li {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.favorite-list button {
  background-color: transparent;
  border: none;
  color: #d14444; 
  cursor: pointer;
}
</style>
