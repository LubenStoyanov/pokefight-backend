import "dotenv/config";
import express from "express";
import pokemonRouter from "./routes/pokemonRouter.js";

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());

//Homepage
app.get("/", (req, res) =>
  res.status(200).json({ hello: "What do you know about pokemons?" })
);

//Get all Pokemons
app.use("/pokemons", pokemonRouter);

app.listen(port, () => console.log(`Server connected to port ${port}`));
