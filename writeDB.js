import connectDB, { Pokemon } from "./database/db.js";
import pokedex from "./database/pokedex.json" assert { type: "json" };
connectDB();
// (() => {
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
// })();

Pokemon.updateMany({}, { $rename: { imageId: "id" } });
