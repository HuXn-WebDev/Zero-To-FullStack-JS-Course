import mongoose from "mongoose";

// Defining Schema
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

// Creating Model
const movieModel = mongoose.model("movie", movieSchema);

// --------- 1. Retrive all document ---------
const allDocs = async () => {
  try {
    // All data
    // const result = await MovieModel.find();
    // console.log(result);
    // Iterating over the data (specific data)
    // result.forEach((item) => {
    //   console.log(item.name);
    //   console.log(item.ratings);
    //   console.log(item.money);
    // });
  } catch (error) {
    console.log(error);
  }
};

// --------- 2. Retrive Single Document ---------
const singleDoc = async () => {
  // const result = await movieModel.findById("649ab23e38eecfddee75ea65");
  // console.log(result);
  // Notice previously we were getting array
  // BUT now in this case we're getting object
  // Which means we don't have to iterate over our data.
  // console.log(result.name);
  // console.log(result.ratings);
  // console.log(result.money);
  // console.log(result.genre);
  // console.log(result.isActive);
  // console.log(result.comments);
};

// --------- 3. Retrive Single Document with Specifc Field ---------
const getDocById = async () => {
  // const result = await movieModel.findById("649ab23e38eecfddee75ea67", "name");
  // console.log(result);
};

// --------- 4. Retrive Document with Specifc Field ---------
const docWithField = async () => {
  // const result = await movieModel.find({ name: "Extraction 2" });
  // const result = await movieModel.find({ ratings: 3 });
  // console.log(result);
};

// --------- 5. Retrive limited document ---------
const getLimitedDoc = async () => {
  // const result = await movieModel.find().limit(3);
  // console.log(result);
};

// --------- 6. Retrive limited document ---------
const skipDoc = async () => {
  // const result = await movieModel.find().skip(2);
  // console.log(result);
};

// --------- 7. How many documents we have ---------
const countDoc = async () => {
  // const result = await movieModel.find().countDocuments();
  // console.log(result);
};

// --------- 8. Sort Documents ---------
const sortDoc = async () => {
  // sort by names
  // const result = await movieModel.find().sort({ names: -1 });
  // console.log(result);
};

// --------- 9. Comparison Query Operators ---------
const operato = async () => {
  // COMPARISON OPERATORS

  // const result = await movieModel.find({ money: { $gt: 60000 } });
  // const result = await movieModel.find({ money: { $lt: 90000 } });
  // const result = await movieModel.find({ money: { $ne: 90000 } }); // $ne (not-equal)
  // console.log(result);

  // LOGICAL OPERATORS
  // const result = await movieModel.find({
  //   // give me a movie who have made 60000 money and ratings is 4
  //   $and: [{ money: 60000 }, { ratings: 4 }],
  // });

  // const result = await movieModel.find({
  //   // give me a movie who have made 60000 money OR ratings is 4
  //   $or: [{ money: 60000 }, { ratings: 4 }],
  // });

  const result = await movieModel.find({ ratings: { $not: { $gt: 5 } } });
  console.log(result);
};

export {
  allDocs,
  singleDoc,
  getDocById,
  docWithField,
  getLimitedDoc,
  skipDoc,
  countDoc,
  sortDoc,
  operato,
};
