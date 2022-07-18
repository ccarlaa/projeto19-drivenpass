import joi from "joi";

const newWifiSchema = joi.object({
    title: joi.string().required(),
    name: joi.string().required(),
    password: joi.string().required()
});

export default newWifiSchema;