import { Router } from "express";
import login from "../controller/login/login";
import register from "../controller/register/register";
import transaction from "../controller/transactions/transactions";
import withdrawal from "../controller/withdrawal/withdrawal";
import fundaccount from "../controller/fundaccount/fundaccount";
import promotion from "../controller/promotion/promotion";
import fundapproval from "../controller/fundapproval/fundapproval";
import { loginAuth } from "../middleware/loginAuth";
import { adminAuthorization } from "../middleware/isAdmin";

const router = Router();

/* GET home page. */
router.post("/login", login);

/* Post user registration*/
router.post("/register", register);

router.get("/transaction", loginAuth, transaction);

router.post("/withdrawal", withdrawal);

router.post("/fundaccount", loginAuth, fundaccount);

router.post("/promotion", promotion);

router.post("/fundapproval/:id",adminAuthorization, fundapproval);

//router.post("/createaccount", loginAuth, createAccount);


export default router;
