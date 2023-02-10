<template>
  <div class = "container">
    <h2 class = "title">POKEDEX</h2>
    <ul class = "list">
      <li v-for="(pokemon,index) in pokemons" :key="pokemon.name" @click="goToPokemon(index + 1)">
        {{index}} - {{pokemon.name.toUpperCase() }}
        <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`" />
      </li>
    </ul>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
    props: ['pokemons'],
    setup() {
    const router = useRouter();

    const goToPokemon = id => {
      router.push({ name: 'pokemon', params: { name: id } });
    };

    return {
      goToPokemon,
    };
  },
}
</script>

<style>
.container {
  text-align: center;
  height: calc(100vh - 80px);
}

.title {
  text-align: center;
}
h2 {
  margin-top: 30px;
  -webkit-text-stroke: 1px black;
  color: #ff0000;
}
.list {
  text-align: center;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0;
}

li {
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  font-size: 16px;
  font-weight:bold;
  color:#ffcb05;
  margin-left: 35px;
  border-radius: 6px;
  border-color:transparent;
  background-color: #2a75bb;
}

li:hover {
  background-color: #008CBA;
  margin-top: 0.1px;
  box-shadow: 0 0 11px rgba(33,33,33,.2); 
  transition: 0.2s ease-in-out;
}

</style>
