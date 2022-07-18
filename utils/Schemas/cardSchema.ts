import joi from "joi";

const newCardSchema = joi.object({
  title: joi.string().required(),
  number: joi.string().pattern(/^[0-9]{16}$/).required(),
  name: joi.string().required(),
  cvc: joi.string().pattern(/^[0-9]{3}$/).required(),
  password: joi.string().pattern(/^[0-9]{4,6}$/).required(),
  type: joi.string().valid('crédito', 'débito', 'ambos').required(),
  expirationDate: joi.string().pattern(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/).required(),
  isVirtual: joi.boolean().required()
});

export default newCardSchema;