<template>
    <div class="game-list">
      <h1>{{ "Gratis de esta semana!" }}</h1>
      <div class="game-cards">
        <FreeCardGame v-for="game in games" :key="game.id" :game="game" />
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import FreeCardGame from "../components/FreeCardGame.vue";
  import axios from "axios";
  
  export default {
    components: {
      FreeCardGame,
    },
    setup() {
      const games = ref([]);
  
      const fetchGames = async () => {
        const options = {
          method: "GET",
          url: "https://epic-free-games.p.rapidapi.com/epic-free-games",
          headers: {
            "X-RapidAPI-Key":
              "3f898cb409msh3a1609e752a74a5p159991jsn858699537606",
            "X-RapidAPI-Host": "epic-free-games.p.rapidapi.com",
          },
        };
  
        try {
          const response = await axios.request(options);
          games.value = response.data;
        } catch (error) {
          console.error(error);
        }
      };
  
      onMounted(fetchGames);
  
      return {
        games,
      };
    },
  };
  </script>
  
  <style scoped>
  .game-list {
    text-align: center; 
  }
  
  .game-cards {
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); 
    gap: 20px;
  }
  </style>
  