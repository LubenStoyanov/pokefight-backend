import express from 'express';
import {getAllPokemons, getSinglePokemon} from '../controller/controller.js'

const pokemonRouter = express.Router();

//Get all pokemons
pokemonRouter.route('/').get(getAllPokemons)
//Get pokemon by id
pokemonRouter.route('/:id').get(getSinglePokemon)

export default pokemonRouter;