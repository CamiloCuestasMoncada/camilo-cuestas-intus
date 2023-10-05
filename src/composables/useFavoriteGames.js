import { computed } from 'vue';
import { useFavoriteGamesStore } from './../stores/favoriteGamesStore';

export function useFavoriteGames() {
  const favoriteGamesStore = useFavoriteGamesStore();

  const favoriteGames = computed(() => favoriteGamesStore.favoriteGames);

  const favoriteCount = computed(() => favoriteGames.value.length);

  const addFavorite = (game) => {
    favoriteGamesStore.addFavorite(game);
  };

  const removeFavorite = (gameId) => {
    favoriteGamesStore.removeFavorite(gameId);
  };

  const isFavorite = (gameId) => {
    return favoriteGamesStore.isFavorite(gameId);
  };

  return {
    favoriteGames,
    favoriteCount,
    addFavorite,
    removeFavorite,
    isFavorite,
  };
}
