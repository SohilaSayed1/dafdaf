import * as MainController from '../mainController/MainController.js'
import * as BankCardValidator from "./BankCardValidator.js"

import {Router} from "express";
import {BankCard} from "../../../Db/models/bankCard.model.js";

const router =Router();
router.get('/bankCards',(req,res)=>{
    MainController.getAllRecordsOf(BankCard,res)
})
router.get('/bankCardsOfUser',(req,res)=>{
    MainController.getAllRecordsWithFilter(BankCard,res,req.body)
})

router.post('/bankCard',(req,res)=>{
    MainController.addRecord(BankCard,req,res,BankCardValidator.bankCardSchema)
})


export default router;