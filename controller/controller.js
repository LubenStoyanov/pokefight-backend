import pokedex from "../database/pokedex.json" assert { type: "json" };
import lodash from "lodash";
const { sample } = lodash;

const getAllPokemons = async (req, res) => {
  try {
    // const pokemons = await Pokemons.find();
    const { type } = req.params;
    if (type === "All") return res.status(200).json(pokedex);
    const pokemons = pokedex.filter((p) => p.type.includes(type));
    res.status(200).json(pokemons);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getSinglePokemon = async (req, res) => {
  const { id } = req.params;

  try {
    // const pokemon = await Pokemons.findById(id);
    const pokemon = await pokedex.find((p) => p.id === Number(id));
    res.status(200).json(pokemon);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getRandomPokemon = async (req, res) => {
  try {
    const pokemon = sample(pokedex);
    res.status(200).json(pokemon);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export { getAllPokemons, getSinglePokemon, getRandomPokemon };
