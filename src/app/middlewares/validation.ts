import { NextFunction, Request, Response } from "express";

import { AppError } from "@shared/errors/AppError";

export default function validation(schema: any, property: string) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const validate = schema.validate(req[property]);
    const valid = validate.error == null;

    if (valid) {
      next();
    } else {
      throw new AppError(validate.error.details[0].message, 2, 206);
    }
  };
}
