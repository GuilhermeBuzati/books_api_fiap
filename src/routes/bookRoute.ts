import express from 'express';
import { createBook } from '../controllers/bookController';

const router = express.Router();

// Rota para cadastrar um novo livro
router.post('/books', createBook);

export default router;
