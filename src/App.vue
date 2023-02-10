<template>
  <div>
    <header>
      <h1>Vue 3 Pokédex - Accredify Assesment</h1>
    </header>
    <nav>
      <router-link to="/" name="Home" style="color: inherit;">HOME</router-link> |
      <router-link to="/about" name="About" style=" color: inherit;">ABOUT</router-link>
    </nav>
    <router-view :pokemons="pokemons" />
  </div>
</template>

<style>
@font-face {
  font-family: "Pokemon";
  src: local("Pokemon"),   url(./fonts/Pokemon-Solid.ttf) format("truetype");}

header {
  background-color: #3b4cca;
  color: #ffde00;
  font-family: "Pokemon";
  -webkit-text-stroke: 1px black;
  padding: 20px;
  text-align: center;
}

nav {
  padding: 20px;
  color:black;
  font-size: 20px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  background-color: #eee;
  border: 1px solid #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 20px;
  width: 200px;
}

h1 {
  
  margin-top: 20px;
  text-align: center;
}

p {
  margin-top: 20px;
  text-align: center;
}
</style>

<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const pokemons = ref([])

    onMounted(async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      const data = await response.json()
      pokemons.value = data.results
    })

    return {
      pokemons
    }
  }
}
</script>