import mongoose from "mongoose";

// Defining Schema
const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 10,
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, publish: { type: Date, default: Date.now } },
  ],
});

// Creating Model
const MovieModel = mongoose.model("Movie", movieSchema);

const createDoc = async () => {
  try {
    // Creating new document
    const m1 = new MovieModel({
      name: "Extraction 2",
      ratings: 4,
      money: 60000,
      genre: ["action", "adventure"],
      isActive: true,
      comments: [{ value: "That was an amazing movie" }],
    });

    // Saving Document
    const result = await m1.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export { createDoc };
