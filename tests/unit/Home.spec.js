import { mount } from "@vue/test-utils";
import Home from "@/components/Home.vue";
describe("Home component", () => {
  let wrapper;
  const pokemons = [
    { name: "bulbasaur" },
    { name: "charmander" },
    { name: "squirtle" },
  ];

  beforeEach(() => {
    wrapper = mount(Home, {
      propsData: {
        pokemons,
      },
    });
  });

  it("renders a list of pokemons", () => {
    expect(wrapper.findAll("li").length).toBe(pokemons.length);
  });

  it("displays the name of each pokemon", () => {
    const pokemonNames = wrapper
      .findAll("li")
      .wrappers.map((w) => w.text().trim().toLowerCase());
    expect(pokemonNames).toEqual(pokemons.map((p) => p.name));
  });

  it("displays the correct image for each pokemon", () => {
    const pokemonImages = wrapper
      .findAll("img")
      .wrappers.map((w) => w.attributes().src);
    expect(pokemonImages).toEqual(
      pokemons.map(
        (p, i) =>
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            i + 1
          }.png`
      )
    );
  });

  it("navigates to the pokemon page when a pokemon is clicked", () => {
    const goToPokemon = jest.fn();
    wrapper.setMethods({ goToPokemon });
    wrapper.findAll("li").at(0).trigger("click");
    expect(goToPokemon).toHaveBeenCalledWith(1);
  });
});
