import { Router } from "express";
import { cadastroController } from "../controllers/cadastroController";


const userRouter = Router();

userRouter.post('/cadastro', cadastroController);