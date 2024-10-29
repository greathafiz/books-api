import express from "express";
import {
  deleteBook,
  createBook,
  getBook,
  getBooks,
  updateBook,
} from "../controllers/books.js";
const router = express.Router();

// create a book POST /api/v1/books
// get books GET /api/v1/books
// get book GET /api/v1/books/:id
// update book PUT /api/v1/books/:id
// delete book DELETE /api/v1/books/:id

// create book
router.post("/", createBook);

// get all books
router.get("/", getBooks);

// get single book
router.get("/:id", getBook);

// update a book
router.put("/:id", updateBook);

// delete a book
router.delete("/:id", deleteBook);

export default router;
