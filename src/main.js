import { createApp } from "vue";
import App from "./App.vue";
import Home from "./components/Home.vue"
import About from "./components/About.vue";
import Pokemon from "./components/Pokemon.vue";
import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home, name: "Home" },
    { path: "/about", component: About, name: "About" },
    { path: "/:name", component: Pokemon, props: true, name: "pokemon" },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");