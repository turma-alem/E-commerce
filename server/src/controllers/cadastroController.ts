import { Request, Response } from "express";
import { cadastroService } from "../services/cadastroService";


export const cadastroController = async (req: Request, res: Response) =>{
    const user = req.body;


    const {success} =  await cadastroService(user);
    res.status(201).json({
        message: 'Cadastro realizado!!!!',
        success
    });
    
}