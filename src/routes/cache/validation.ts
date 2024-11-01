import { celebrate, Segments } from "celebrate";
import Joi from "joi";

export abstract class CacheRoutesValidation {
  private static addToCacheBodySchema = Joi.object({
    key: Joi.string().required(),
    value: Joi.string().required(),
    ttl: Joi.number().optional(),
  });

  private static keyParamSchema = Joi.object({
    key: Joi.string().required(),
  });

  static keyParamValidation = celebrate({
    [Segments.PARAMS]: this.keyParamSchema,
  });

  static addToCacheValidation = celebrate({
    [Segments.BODY]: this.addToCacheBodySchema,
  });
}
