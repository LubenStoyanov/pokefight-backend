import pokedex from "../database/pokedex.json" assert { type: "json" };
import Pokemons from "../model/model.js";
const getAllPokemons = (req, res) => {
  try {
    // const pokemons = await Pokemons.find();
    res.status(200).json(pokedex);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getSinglePokemon = (req, res) => {
  const { id } = req.params;
  console.log("here", id);
  try {
    // const pokemon = await Pokemons.findById(id);
    const pokemon = pokedex.find((p) => p.id === Number(id));
    console.log(id);
    res.status(200).json(pokemon);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { getAllPokemons, getSinglePokemon };
