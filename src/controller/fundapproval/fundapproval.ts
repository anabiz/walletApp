import { Request, Response } from "express";
import { getMainCurrency } from "../../services/currencyService";
import { getExchangeRate } from "../../util/index";




const fundapproval = async (req: Request, res: Response) => {
console.log(await getMainCurrency(req.body.user_id));
  const rate = await getExchangeRate(req.body.in, req.body.out, req.body.amount)
  res.status(200).json({message:rate})
};

export default fundapproval;