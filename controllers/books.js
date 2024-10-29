import Book from "../models/Book.js";

export const createBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json({ data: newBook, message: "Book created" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({ data: books, message: "retrieved.." });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res
        .status(404)
        .json({ message: `Book with ${req.params.id} not found` });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!book) {
      return res
        .status(404)
        .json({ message: `Book with ${req.params.id} not found` });
    }
    res.status(200).json({ book, message: "book updated" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findOneAndDelete({ _id: req.params.id });

    if (!book) {
      return res
        .status(404)
        .json({ message: `Book with ${req.params.id} not found` });
    }

    res.status(200).json({ book, message: "book deleted" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
