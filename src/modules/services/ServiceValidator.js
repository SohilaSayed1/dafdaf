import Joi from "joi";

export const serviceSchema = Joi.object({
    id:Joi.number().optional(),
    name: Joi.string().required(),
    fees: Joi.number().required(),
    validUntilDate: Joi.date().allow(null).optional(),
    state: Joi.string().valid('active', 'locked').required(),
});
