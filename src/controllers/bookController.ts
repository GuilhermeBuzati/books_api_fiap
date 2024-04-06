import { Request, Response } from 'express';
import pool from '../config/db';
import Book from '../models/Book';


// Função para cadastrar um novo livro
export const createBook = async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, author, isbn, releaseDate } = req.body; // Extrai os dados do corpo da requisição

        // Cria uma nova instância de Book com os dados fornecidos
        const newBook = new Book(title, author, isbn, releaseDate);

        // Insere o novo livro no banco de dados
        const query = 'INSERT INTO books (title, author, isbn, release_date) VALUES ($1, $2, $3, $4) RETURNING *';
        const { rows } =  await pool.query(query, [newBook.title, newBook.author, newBook.isbn, newBook.releaseDate]);

        // Retorna o livro recém-cadastrado como resposta
        res.status(201).json(rows[0]);
    } catch (error) {
        console.error('Error creating book:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};