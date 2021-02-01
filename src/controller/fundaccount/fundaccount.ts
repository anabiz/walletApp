import { Request, Response } from "express";
import { getUserInfoFromToken } from "../../util/index";
import * as fund from "../../services/userService";
import { validateFundAcount } from "../../schema/validation/index";
import { getMainCurrency } from "../../services/currencyService";
import { getElitWalletByCurrencyId } from "../../services/walletService";
import { getCurrencyByName } from "../../services/currencyService";
import { createUserAccount } from "../../services/accountService";
import { updateWalletById} from "../../services/walletService"

const fundaccount = async (req: Request, res: Response) => {

  try {
    const { error, value } = validateFundAcount(req.body);
    if (!error) {
      const user = getUserInfoFromToken(req.cookies.user);
      const currency = await getMainCurrency(user.id);
      if (user.user_type === "elit") {
        const targetCurrency = await getCurrencyByName(value.currency);
        const account = await getElitWalletByCurrencyId(targetCurrency.id, user.id);
        console.log(account);
        if (!account && value.transaction_type === "credit") {
          const input={
            user_id: user.id,
            currency_id:targetCurrency.id,
            amount: value.amount,
            is_main:false
          }
          const result = await createUserAccount(input);
          res.status(200).json({ data: result })
          return;
        }else if(!account && value.transaction_type === "debit"){
          res.status(400).json({ data: `You don't have active ${value.transaction_type} acount` })
          return;
        }else if(account && value.transaction_type === "credit"){
          const newAmount = Number(value.amount) + Number(account.amount);
          await updateWalletById(newAmount, account.id);
          res.status(200).json({ data: `hello ${user.name} you account has been credited with ${value.amount} `});
          return;
        }else if(account && value.transaction_type === "debit"){
          const newAmount =  Number(account.amount) - Number(value.amount);
          if(newAmount < 0){
            res.status(400).json({ data: `insufficient balance` })
            return;
          }
          await updateWalletById(newAmount, account.id);
          res.status(200).json( { data: `hello ${user.name} you account has been debited with ${value.amount} `});
          return;
        }
      
      } else if (user.user_type === "noob") {
        const input = {
          user_id: user.id,
          amount: value.amount,
          main_currency: currency.name,
          input_currency: req.body.currency
        }
        const result = await fund.fundNoobAccount(input);
        res.status(200).json({ data: result })
        return;
      }

    } else {
      res.status(400).json({ message: error.message });
      return;
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    return;
  }
};

export default fundaccount;