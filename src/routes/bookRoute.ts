import express from 'express';
import { createBook, getBookById } from '../controllers/bookController';

const router = express.Router();

// Rota para cadastrar um novo livro
router.post('/books', createBook);

router.get('/books/:id', getBookById);

export default router;
