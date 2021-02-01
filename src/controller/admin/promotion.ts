import { Request, Response } from "express";


const promotion = (_req: Request, res: Response) => {

  res.status(200).json({message:"hello"})
};

export default promotion;