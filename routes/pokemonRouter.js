import express from "express";
import {
  getAllPokemons,
  getSinglePokemon,
  getInfo,
} from "../controller/controller.js";

const pokemonRouter = express.Router();

//Get all pokemons
pokemonRouter.route("/").get(getAllPokemons);
//Get pokemon by id
pokemonRouter.route("/:id").get(getSinglePokemon);

pokemonRouter.route("/:id/:info").get(getInfo);

export default pokemonRouter;
