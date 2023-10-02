import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
  console.log("we are connected!");
});

// books
const bookSchema = new mongoose.Schema({
  title: String,
});

const Book = mongoose.model("Book", bookSchema);

Book.find()
  .exec()
  .then((books) => console.log(books));
