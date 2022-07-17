import joi from "joi";

const newUserSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().pattern(/^[0-9a-zA-Z$*&_/@#]{4,}$/).required(),
});

export default newUserSchema;