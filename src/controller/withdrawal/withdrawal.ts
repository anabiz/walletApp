import { Request, Response } from "express";


const withdrawal = (_req: Request, res: Response) => {

  res.status(200).json({message:"hello"})
};

export default withdrawal;