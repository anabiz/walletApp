import { Request, Response } from "express";


 const login = (_req: Request, res: Response) => {

  res.status(200).json({message:"hello"})
};

export default login;