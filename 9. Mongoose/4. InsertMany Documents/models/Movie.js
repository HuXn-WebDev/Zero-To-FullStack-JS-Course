import mongoose from "mongoose";

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

const MovieModel = mongoose.model("Movie", movieSchema);

const insertManyDocs = async () => {
  try {
    const m1 = new MovieModel({
      name: "Extraction 2",
      ratings: 4,
      money: 60000,
      genre: ["action", "adventure"],
      isActive: true,
      comments: [{ value: "That was an amazing movie" }],
    });
    const m2 = new MovieModel({
      name: "John Wick Chapter 4",
      ratings: 5,
      money: 23000,
      genre: ["action"],
      isActive: true,
      comments: [{ value: "John doesn't seem that angery any more :(" }],
    });
    const m3 = new MovieModel({
      name: "Mission: Impossible - Dead Reckoning Part One",
      ratings: 4,
      money: 60000,
      genre: ["action", "spy", "crime film", "thriller"],
      isActive: true,
      comments: [{ value: "Ok that was Tom but where is Jerry?" }],
    });
    const m4 = new MovieModel({
      name: "Transformers: Rise of the Beasts",
      ratings: 4,
      money: 220000,
      genre: ["action", "adventure", "Science Fiction", "Fantasy"],
      isActive: true,
      comments: [{ value: "That was enough VFX for today" }],
    });
    const m5 = new MovieModel({
      name: "The Expendables 4",
      ratings: 4,
      money: 220000,
      genre: ["action", "war", "comedy", "thriller"],
      isActive: true,
      comments: [{ value: "That was enough VFX for today" }],
    });

    const result = await MovieModel.insertMany([m1, m2, m3, m4, m5]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export { insertManyDocs };
