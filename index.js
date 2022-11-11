import "dotenv/config";
import express from "express";
import cors from "cors";
import pokemonRouter from "./routes/pokemonRouter.js";
import connectDB, { Pokemon } from "./database/db.js";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
// app.use(connectDB());
connectDB();

// () => {
//   pokedex.map(
//     async (p) =>
//       await Pokemon.create({
//         imageId: p.id,
//         name: p.name.english,
//         type: p.type,
//         base: {
//           hp: p.base["HP"],
//           attack: p.base["Attack"],
//           defense: p.base["Defense"],
//           sp_attack: p.base["Sp. Attack"],
//           sp_defense: p.base["Sp. Defense"],
//           speed: p.base["Speed"],
//         },
//       })
//   );
// };

//Homepage
app.get("/", (req, res) =>
  res.status(200).json({ hello: "What do you know about pokemons?" })
);

//Get all Pokemons
app.use("/pokemons", pokemonRouter);

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
