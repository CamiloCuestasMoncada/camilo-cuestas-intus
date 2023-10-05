<template>
  <div class="home">
    <div class="content">
      <h1 class="title">{{ "Juegos recomendados" }}</h1>
      <p class="description">
        {{
          `En nuestra página, te ofrecemos cada semana una cuidadosa selección de las mejores 
          recomendaciones de juegos, tanto gratuitos como de pago. Sabemos que la industria de 
          los videojuegos está en constante evolución, con una amplia gama de opciones para todos 
          los gustos y plataformas. Es por eso que nuestro equipo de expertos se esfuerza por mantenerte 
          al día con los mejores que están disponibles en el mercado`
        }}
      </p>
      <Navbar />
    </div>

    <img
      src="./../assets/arcade_game.png"
      alt="Máquina de Videojuegos"
      class="game-machine"
    />
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import { ref } from "vue";
import { useFavoriteGamesStore } from "../stores/favoriteGamesStore";
const favoriteGamesStore = useFavoriteGamesStore();
</script>

<style>
.description {
  width: 40vw;
  font-size: 17px;
  color: rgb(255, 255, 255);
  font-weight: 700;
}
.home {
  width: 90vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.game-machine {
  opacity: 0.5;
}
@media (max-width: 1162px) {
 
  .description {
    width: 70vw;
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 27px;
  }
  .description {
    width: 70vw;
    font-size: 14px;
  }
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
