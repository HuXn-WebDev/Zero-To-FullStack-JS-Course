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

// Delete Document
const deleteOne = async (id) => {
  // try {
  //   // const result = await movieModel.findByIdAndDelete(id);
  //   const result = await movieModel.deleteOne(id);
  //   console.log(result);
  // } catch (error) {
  //   console.log(error);
  // }
};

const deleteMany = async () => {
  // try {
  //   const result = await movieModel.deleteMany({ ratings: 4 });
  //   console.log(result);
  // } catch (error) {
  //   console.log(error);
  // }
};

export { deleteOne, deleteMany };
