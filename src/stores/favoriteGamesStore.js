import { defineStore } from "pinia";

export const useFavoriteGamesStore = defineStore({
  id: "favoriteGames",
  state: () => ({
    favoriteGames: [],
  }),
  getters: {
    isFavorite: (state) => (gameId) => {
      return state.favoriteGames.some((game) => game.id === gameId);
    },
  },
  actions: {
    addFavorite(game) {
      if (!this.isFavorite(game.id)) {
        this.favoriteGames.push(game);
      }
    },
    removeFavorite(gameId) {
      this.favoriteGames = this.favoriteGames.filter(
        (game) => game.id !== gameId
      );
    },
  },
});
