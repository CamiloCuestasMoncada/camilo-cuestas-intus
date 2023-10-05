<template>
    <div>
      <button @click="showFavorites">Mostrar Favoritos ({{ favoriteCount }})</button>
    </div>
  </template>
  
  <script>
  
  
  export default {
    setup() {
      /*const { favoriteCount, favoriteGames } = useFavoriteGames();
  
      const showFavorites = () => {
        
      };*/
  
      return {
        favoriteCount,
        favoriteGames,
        showFavorites,
      };
    },
  };
  </script>
  