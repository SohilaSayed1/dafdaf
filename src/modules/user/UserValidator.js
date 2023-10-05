import Joi from "joi"


export const userSchema = Joi.object({
    id:Joi.number().optional(),
    name: Joi.string().required(),
    email: Joi.string().email(),
    password:Joi.string().required(),
    status: Joi.string().valid('archived','active'),
    level: Joi.number().integer().allow(null),
    roleId:Joi.number().optional()
});