import env from "@lib/configLoader";
import { CredentialRepository } from "@modules/credentials/infra/repositories/CredentialRepository";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "@shared/errors/AppError";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      env.API_METALQUIP_SECRET_TOKEN
    ) as IPayload;

    const credentialRepository = new CredentialRepository();

    const user = await credentialRepository.findByIdUnion(user_id);

    if (!user) {
      throw new AppError("User does not exists!", 2);
    }

    request.user = user;

    next();
  } catch (err) {
    console.log(err);
    throw new AppError("Invalid token!", 2, 401);
  }
}
