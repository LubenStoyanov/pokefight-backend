import "dotenv/config";
import express from "express";
import cors from "cors";
import pokemonRouter from "./routes/pokemonRouter.js";

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

//Homepage
app.get("/", (req, res) =>
  res.status(200).json({ hello: "What do you know about pokemons?" })
);

//Get all Pokemons
app.use("/pokemons", pokemonRouter);

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
