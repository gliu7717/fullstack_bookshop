import express from 'express';
const router = express.Router();
import asyncHandler from '../middleware/asyncHandler.js';
import Book from '../models/bookModel.js';

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const books = await Book.find({});
    res.json(books);
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (Book) {
      return res.json(book);
    }
    res.status(404);
    throw new Error('Resource not found');
  })
);

export default router;