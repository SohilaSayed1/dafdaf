import Joi from "joi";
export const paymentMethodSchema = Joi.object({
    id:Joi.number().optional(),
    name: Joi.string().required(),
});
