import Joi  from "joi";
import User from "../../../Db/models/User.model.js";
import Service from "../../../Db/models/Services.model.js";
import payment from "../../../Db/models/payment.model.js";

export const pendingPaymentSchema = Joi.object({
    UserId:Joi.number().required(),
    ServiceId: Joi.number().required()
});

export const isValidPendingPayment = async(req,res)=>{
   const error = pendingPaymentSchema.validate(req.body).error;
   if(error){
    return res.send(error);
   } 
    
    const service = await Service.findOne({ where: { id: req.body.ServiceId} });
    const user = await User.findOne({ where: { id: req.body.UserId } });

    if(!user){
        return res.send('user not found')}
        else if(!service){
            return res.send('service not found')
        }else{
        payment.create(req.body)
            return res.send('Record Created Succesfully')}
}


export const confirmedPaymentSchema = Joi.object({
    id:Joi.number().required(),
    PaymentMethodId: Joi.number().required(),
});

export const updateRecord = (req,res)=>{
    const error =confirmedPaymentSchema.validate(req.body).error
    if(error){
        return res.send(error)
    }else {
        payment.update({PaymentMethodId:req.body.PaymentMethodId,
                        state:'successful'},{where: {id:req.body.id}})

    }
}

