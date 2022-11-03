import Pokemons from '../model/model.js'
const getAllPokemons = async (req, res) => {
    try{
        const pokemons = await Pokemons.find();
        res.status(200).json(pokemons);
    } catch(error) {
        return res.status(500).json({error: error.message})
    }
}
const getSinglePokemon = async (req, res) => {
    const { id } = Number(req.params);
    try{
        const pokemon = await Pokemons.findById();
        res.status(200).json(pokemon);
    } catch(error) {
        return res.status(500).json({error: error.message})
    }
}

export {getAllPokemons, getSinglePokemon}