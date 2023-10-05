<template>
  <div>
    <h1>Tienda</h1>
    <GameList :games="games" />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import GameList from "./../components/GameList.vue";

export default {
  components: {
    GameList,
  },
  setup() {
    const games = ref([]);
    /* 
    Las apikeys las tomaria del .env, pero al ser un ejercicio donde no tengo acceso a 
    variables de entorno ya que no tengo configurado node, las pongo aca directamente
    */
    const fetchGames = async () => {
      const options = {
        method: "GET",
        url: "https://epic-store-games.p.rapidapi.com/onSale",
        params: {
          searchWords: "Mount",
          locale: "us",
          country: "us",
        },
        headers: {
          "X-RapidAPI-Key":
            "3f898cb409msh3a1609e752a74a5p159991jsn858699537606",
          "X-RapidAPI-Host": "epic-store-games.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        games.value = response.data;
      } catch (error) {
        console.error(error);
      }
    };
    onMounted(async () => {
      fetchGames();
    });

    return {
      games,
    };
  },
};
</script>

<style></style>
