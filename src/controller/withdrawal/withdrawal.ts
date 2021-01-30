import { Request, Response } from "express";

const withdrawal = async(_req: Request, res: Response) => {
  
  res.status(200).json({message:"hello"})

};

export default withdrawal;