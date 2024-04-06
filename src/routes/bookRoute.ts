import express from 'express';
import { createBook, getBookById, updateBookById } from '../controllers/bookController';

const router = express.Router();

// Rota para cadastrar um novo livro
router.post('/books', createBook);

router.get('/books/:id', getBookById);

router.put('/books/:id/edit', updateBookById);

export default router;
