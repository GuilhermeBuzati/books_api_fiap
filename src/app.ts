import express, { Request, Response } from 'express';
import bookRouter from './routes/bookRoute'

const app = express();
app.use(express.json());

// Adiciona o roteador de livros ao aplicativo
app.use('/api', bookRouter);

app.post('/test', (req: Request, res: Response) => {
    res.send(req.body);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
