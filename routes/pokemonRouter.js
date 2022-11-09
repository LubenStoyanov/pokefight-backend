import express from "express";
import {
  getAllPokemons,
  getSinglePokemon,
  getInfo,
  getRandomPokemon,
} from "../controller/controller.js";

const pokemonRouter = express.Router();

//Get all pokemons
pokemonRouter.route("/type/:type").get(getAllPokemons);
//Get pokemon by id
pokemonRouter.route("/:id").get(getSinglePokemon);

pokemonRouter.route("/:id/:info").get(getInfo);
pokemonRouter.route("/random/random/random").get(getRandomPokemon);

export default pokemonRouter;
