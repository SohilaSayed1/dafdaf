import Joi from "joi";

export const roleSchema = Joi.object({
    role_id:Joi.number().optional(),
    name: Joi.string().required(),
});

