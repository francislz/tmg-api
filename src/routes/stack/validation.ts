import { celebrate, Segments } from "celebrate";
import Joi from "joi";

export abstract class StackRoutesValidations {
  private static readonly addToStackBodySchema = Joi.object({
    value: Joi.string().required(),
  });

  static readonly addToStackValidation = celebrate({
    [Segments.BODY]: this.addToStackBodySchema,
  });
}
