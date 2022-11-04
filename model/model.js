import mongoose from "mongoose";

const { Schema, model } = mongoose;
//        What document should look like, what is a structure of our document?
const Pokemon = new Schema({
  id: {
    type: Number,
  },
  name: {
    type: Object,
    required: true,
  },
  type: {
    type: Array,
    required: true,
  },
  base: {
    type: Object,
    required: true,
  },
});

// model takes 2 arguments: a string '' with collection's name; second: we'll attach our schema collaction
export default model("Pokemon", Pokemon);
