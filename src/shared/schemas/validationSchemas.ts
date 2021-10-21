import JoiDate from "@hapi/joi-date";
import JoiBase from "joi";

const Joi = JoiBase.extend(JoiDate);

const validationSchema = {
  // Login
  login: Joi.object().keys({
    username: Joi.string().required().min(1).messages({
      "string.base": "username é do tipo string",
      "string.empty": "username não pode estar vazio",
      "string.min": "username deve ter o tamanho maior ou igual a 1",
      "any.required": "username não encontrado",
    }),
    password: Joi.string().required().min(1).messages({
      "string.base": "password é do tipo string",
      "string.empty": "password não pode estar vazio",
      "string.min": "password deve ter o tamanho maior ou igual a 1",
      "any.required": "password não encontrado",
    }),
  }),
};

export default validationSchema;
