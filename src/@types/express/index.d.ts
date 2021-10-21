declare namespace Express {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface Request {
    user: {
      id: string;
      user: string;
      name: string;
      cmp_id: string;
      active: string;
      password: string;
    };
  }
}
