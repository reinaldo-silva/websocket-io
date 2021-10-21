import bcrypt from "bcrypt";

import { AppError } from "@shared/errors/AppError";

interface IBcrypt {
  salt: string;
  hash: string;
}

async function encryptPassword(password: string): Promise<IBcrypt> {
  const salt = await bcrypt.genSalt(10);

  if (!salt) {
    throw new AppError("Error ao gerar o salt.", 1);
  }

  const hash = await bcrypt.hash(password, salt);

  if (!hash) {
    throw new AppError("Error ao gerar o hash.", 1);
  }

  return { salt, hash };
}

function checkPassword(
  password: string,
  currentPassword: string
): Promise<boolean> {
  return bcrypt.compare(password, currentPassword);
}

export { encryptPassword, checkPassword };
