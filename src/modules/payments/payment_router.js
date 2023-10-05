import * as MainController from '../mainController/MainController.js'
import * as paymentController from './paymentController.js'
import {Router} from 'express'
import paymentModel from "../../../Db/models/payment.model.js";




const  router = Router()
router.get('/getPaymentHistory', (req,res)=>{
     MainController.getAllRecordsWithFilter(paymentModel,res,req.body)
})

router.get('/getAllPaymentHistory',(req,res)=>{
     MainController.getAllRecordsOf(paymentModel,res)
})
router.post('/addPaymentHistory',(req,res)=>{
     paymentController.isValidPendingPayment(req,res);
})

router.put('/confirmPayment',(req,res)=>{
     paymentController.updateRecord(paymentModel,req,res,PaymentValidator.isValidConfirmedPayment)
})
export default router;