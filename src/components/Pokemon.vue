<template>
  <div class="pokemon-info">
    <h2 class = "pokemon-title">{{ pokename.charAt(0).toUpperCase() + pokename.slice(1) }}</h2>
    <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`" style="width:20vw; height:20vw" />
    
    <p>TYPE :</p>
    <div class="type-container">
      <div v-for="type in types" class="type">
        <img :src="`src/assets/pokemon_types/${type.name}.png`" class="pokemon-type-img" />
        <!-- <p class="type-name">{{ type.name.toUpperCase() }} </p> -->
      </div>
      </div>
    <p>WEIGHT : {{ weight }} kg</p>
    <p>HEIGHT : {{ height }} m</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const { params } = useRoute();
    const id  = params.name;
    const types = ref([]);
    const weight = ref('');
    const height = ref('');
    const pokename = ref('');

    onMounted(async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        types.value = data.types.map(type => ({
            name: type.type.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/${type.type.name}.png`
        }));
        weight.value = data.weight;
        height.value = data.height;
        pokename.value = data.name;
    });

    return {
      id,
      types,
      weight,
      height,
      pokename,
    };
  },
};
</script>
<style>
.pokemon-info {
  text-align: center;
  background-color: #2a75bb;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  margin: 30px;
}

.pokemon-info img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.pokemon-title{
    font-family: "Pokemon";
    text-decoration: none;
    -webkit-text-stroke: 1px black;
}
.pokemon-info p {
  color: white;
  font-weight: bold;
  margin: 10px 0;
}

.pokemon-type-img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.type-container {
  display: inline-flex;
  align-items: center;
  margin-right: 10px;
}   
.type {
  align-items: center;
  margin-right: 10px;
}

</style>

