import joi from "joi";

const newNoteSchema = joi.object({
    title: joi.string().max(50).required(),
    text: joi.string().max(1000).required()
});

export default newNoteSchema;