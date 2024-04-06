"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookRoute_1 = __importDefault(require("./routes/bookRoute"));
const app = (0, express_1.default)();
// Adiciona o roteador de livros ao aplicativo
app.use('/api', bookRoute_1.default);
app.get('/test', (req, res) => {
    res.send('ok');
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
