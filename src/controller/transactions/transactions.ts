import { Request, Response } from "express";


const transaction = (_req: Request, res: Response) => {

  res.status(200).json({message:"hello"})
};

export default transaction;