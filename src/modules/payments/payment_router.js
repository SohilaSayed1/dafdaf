import * as MainController from '../mainController/MainController.js'
import * as paymentController from './paymentController.js'
import {Router} from 'express'
import paymentModel from "../../../Db/models/payment.model.js";




const  router = Router()
router.post('/getPaymentHistory', (req,res)=>{
     MainController.getAllRecordsWithFilter(paymentModel,res,req.body)
})

router.post('/getAllPaymentHistory',(req,res)=>{
     MainController.getAllRecordsOf(paymentModel,res)
})
router.post('/addPaymentHistory',(req,res)=>{
     paymentController.isValidPendingPayment(req,res);
})

router.put('/confirmPayment',(req,res)=>{
     paymentController.updateRecord(req,res)
})
export default router;
