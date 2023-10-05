import * as MainController from '../mainController/MainController.js'
import * as Validator from './PaymentMethodValidator.js'
import {Router} from 'express'
import PaymentMethod from "../../../Db/models/payment.method.model.js";

export const paymentMethodRouter = Router()

paymentMethodRouter.get('/PaymentMethod',(req,res)=>{
 MainController.getAllRecordsOf(PaymentMethod,res)})

paymentMethodRouter.post('/paymentMethod',(req,res)=>{
  MainController.addRecord(PaymentMethod,req,res,Validator.paymentMethodSchema)})
export default paymentMethodRouter;