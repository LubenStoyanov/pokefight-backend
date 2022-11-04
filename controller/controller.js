import pokedex from "../database/pokedex.json" assert { type: "json" };

const getAllPokemons = async (req, res) => {
  try {
    // const pokemons = await Pokemons.find();
    res.status(200).json(pokedex);
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

const getInfo = async (req, res) => {
  try {
    const { id, info } = req.params;
    const pokemon = await pokedex.find((p) => p.id === Number(id));

    res.status(200).json(pokemon[info]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getAllPokemons, getSinglePokemon, getInfo };
