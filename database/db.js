import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

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

export const Pokemon = mongoose.model("Pokemon", pokemonSchema);
