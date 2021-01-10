const Joi = require("joi");

function validateContact(sender) {
  console.log(sender);
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    phone: Joi.number(),
    company: Joi.string().min(3).max(100),
    message: Joi.string().min(3),
  });

  return schema.validate({
    name: sender.name,
    email: sender.email,
    phone: sender.phone,
    company: sender.company,
    message: sender.message,
  });
}

module.exports.validate = validateContact;
