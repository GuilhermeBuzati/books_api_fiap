"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBook = void 0;
const db_1 = __importDefault(require("../config/db"));
// Função para cadastrar um novo livro
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, author, isbn, releaseDate } = req.body; // Extrai os dados do corpo da requisição
        // Cria uma nova instância de Book com os dados fornecidos
        const newBook = new Book(title, author, isbn, releaseDate);
        // Insere o novo livro no banco de dados
        const query = 'INSERT INTO books (title, author, isbn, release_date) VALUES ($1, $2, $3, $4) RETURNING *';
        const { rows } = yield db_1.default.query(query, [newBook.title, newBook.author, newBook.isbn, newBook.releaseDate]);
        // Retorna o livro recém-cadastrado como resposta
        res.status(201).json(rows[0]);
    }
    catch (error) {
        console.error('Error creating book:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.createBook = createBook;
