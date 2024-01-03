import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 40000,
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, publish: { type: Date, default: Date.now } },
  ],
});

const movieModel = mongoose.model("movie", movieSchema);

// Update Document
const updateByID = async () => {
  // updateOne(filter, whatToChange?)
  // try {
  //   const result = await MovieModel.findByIdAndUpdate(
  //     "649b41a505c6903acd50a32d",
  //     {
  //       name: "Mission: Impossible",
  //       genre: ["Action", "Science fiction", "Adventure", "Fantasy"],
  //     }
  //   );
  //   console.log(result);
  // } catch (error) {
  //   console.log(error);
  // }
};

// Update only one
// updateOne(filter, whatToChange?)
const updateOne = async (id) => {
  // try {
  //   const result = await movieModel.updateOne(
  //     { _id: id },
  //     { name: "John Wick: Chapter 4" }
  //   );
  //   console.log(result);
  // } catch (error) {
  //   console.log(error);
  // }
};

// UPDATE MANY
const updateMany = async () => {
  try {
    const result = await movieModel.updateMany(
      { ratings: 5 },
      { comments: [{ value: "5 Star Movies" }] }
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export { updateByID, updateOne, updateMany };
