import * as dotenv from "dotenv";
dotenv.config();
import mongoose, { Mongoose } from "mongoose";

export default () =>
  mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
  });

const pokemonSchema = new mongoose.Schema({
  imageId: Number,
  name: String,
  type: [String],
  base: {
    hp: Number,
    attack: Number,
    defense: Number,
    sp_attack: Number,
    sp_defense: Number,
    speed: Number,
  },
});

const playerSchema = new mongoose.Schema({
  username: String,
  games: Number,
  wins: Number,
});

export const Pokemon = mongoose.model("Pokemon", pokemonSchema);
export const Player = mongoose.model("Player", playerSchema);
