import { Request, Response } from "express";
import  {getUserInfoFromToken} from "../../util/index";
import  * as fund from "../../services/userService";
import {validateFundAcount} from "../../schema/validation/index";
import { getMainCurrency } from "../../services/currencyService";

const fundaccount = async (req: Request, res: Response) => {
 
  try{
    const { error, value } = validateFundAcount(req.body);
    if(!error){
      const user = getUserInfoFromToken(req.cookies.user);
      const currency = await getMainCurrency(user.id);
      if(user.user_type === "elit"){
         await fund.fundElitAccount()
      }else if(user.user_type === "noob"){
        const input ={
          user_id: user.id,
          amount: value.amount,
          main_currency:currency.name,
          input_currency:req.body.currency
          }
        const result = await fund.fundNoobAccount(input);
        res.status(200).json({data:result})
        return;
      }
      
    }else{
      res.status(400).json({message:error.message});
      return;
    } 
  }catch(error){
    res.status(500).json({message:error.message});
    return;
  }
};

export default fundaccount;