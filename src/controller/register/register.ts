import { Request, Response } from "express";


const register = (_req: Request, res: Response) => {

  res.status(200).json({message:"hello"})
};

export default register;