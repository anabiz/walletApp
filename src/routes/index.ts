import { Router } from "express";
import login from "../controller/login/login";
import register from "../controller/register/register";
import transaction from "../controller/transactions/transactions";
import withdrawal from "../controller/withdrawal/withdrawal";
import fundaccount from "../controller/fundaccount/fundaccount";
import promotion from "../controller/promotion/promotion";
import fundapproval from "../controller/fundapproval/fundapproval";

const router = Router();

/* GET home page. */
router.post("/login", login);

/* Post user registration*/
router.post("/register", register);

router.get("/transaction", transaction);

router.post("/withdrawal", withdrawal);

router.post("/fundaccount", fundaccount);

router.post("/promotion", promotion);

router.post("/fundapproval", fundapproval);


export default router;
