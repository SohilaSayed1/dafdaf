import Joi from "joi";
export const paymentMethodSchema = Joi.object({
    role_id:Joi.number().optional(),
    name: Joi.string().required(),
});