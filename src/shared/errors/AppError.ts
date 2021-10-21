export class AppError {
  public readonly message: string;
  public readonly error: number;
  public readonly statusCode: number;

  constructor(message: string, error: number, statusCode = 400) {
    this.message = message;
    this.error = error;
    this.statusCode = statusCode;
  }
}
