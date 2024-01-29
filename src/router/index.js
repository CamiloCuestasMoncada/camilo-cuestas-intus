import { createRouter, createWebHistory } from "vue-router";
import Home from "./../views/Home.vue"
import FreeGamesOfWeek from "./../views/FreeGamesOfWeek.vue"
import GamesOnSale from "./../views/GamesOnSale.vue"
const routes = [
    {
        path:'/camilo-cuestas-intus',
        name: "home",
        component: Home
    },
    {
        path:'/free-games-of-week',
        name: "freeGamesOfWeek",
        component: FreeGamesOfWeek
    },
    {
        path:'/games-on-sale',
        name: "gamesOnSale",
        component: GamesOnSale
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router