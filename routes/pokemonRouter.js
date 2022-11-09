import express from "express";
import {
  getAllPokemons,
  getSinglePokemon,
  getRandomPokemon,
  getPokemonByName,
} from "../controller/controller.js";

const pokemonRouter = express.Router();

//Get all pokemons
pokemonRouter.route("/type/:type").get(getAllPokemons);
//Get pokemon by id
pokemonRouter.route("/onePokemon/:id").get(getSinglePokemon);

pokemonRouter.route("/random").get(getRandomPokemon);
pokemonRouter.route("/name/:name").get(getPokemonByName);

export default pokemonRouter;
