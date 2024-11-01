import { celebrate, Segments } from "celebrate";
import Joi from "joi";

export abstract class CacheRoutesValidation {
  private static readonly addToCacheBodySchema = Joi.object({
    key: Joi.string().required(),
    value: Joi.string().required(),
    ttl: Joi.number().optional(),
  });

  private static readonly keyParamSchema = Joi.object({
    key: Joi.string().required(),
  });

  static readonly keyParamValidation = celebrate({
    [Segments.PARAMS]: this.keyParamSchema,
  });

  static readonly addToCacheValidation = celebrate({
    [Segments.BODY]: this.addToCacheBodySchema,
  });
}
