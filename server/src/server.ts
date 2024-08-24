import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import errorHandler from './middleware/errors/ErrorHandler';



// Configurações de variáveis de ambiente
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/', userRouter);

// Rota principal
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use(errorHandler)

// Inicializando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});