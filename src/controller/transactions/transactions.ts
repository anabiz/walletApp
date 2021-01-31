import { Request, Response } from "express";


const transaction = (_req: Request, res: Response) => {
try{
  
  res.status(200).json({message:"hello"})
}catch(error){

}
 
};

export default transaction;