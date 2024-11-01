import { celebrate, Segments } from "celebrate";
import Joi from "joi";

export abstract class StackRoutesValidations {
  private static addToStackBodySchema = Joi.object({
    value: Joi.string().required(),
  });

  static addToStackValidation = celebrate({
    [Segments.BODY]: this.addToStackBodySchema,
  });
}
