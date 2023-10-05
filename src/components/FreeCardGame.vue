<template>
  <div class="game-card">
    <div class="game-title">{{ game.title }}</div>
    <div class="game-image">
      <a :href="game.appUrl" target="_blank">
        <img :src="game.offerImageTall" alt="Game Image" />
      </a>
    </div>
    <div class="game-description">{{ game.description }}</div>
    <div class="game-company">{{ game.company }}</div>
  </div>
</template>

<script>
import { defineProps } from "vue";

export default {
  props: {
    game: Object,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.game-card {
  width: 80%;
  margin: 0 auto;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  background-color: rgba(9, 33, 63, 0.525);
}

.game-title {
  font-size: 24px;
  font-weight: bold;
}

.game-image img {
  max-width: 100%;
  height: auto;
}

.game-description {
  font-size: 16px;
}

.game-company {
  font-size: 14px;
  color: #888;
}
</style>
