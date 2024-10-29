import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 10,
  },
  author: {
    type: String,
    required: true,
  },
  publishedYear: {
    type: String,
    required: true,
  },
  genre: String,
});

const Book = mongoose.model("Book", BookSchema);

export default Book;
