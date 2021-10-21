import { Router } from "express";

import { testeRouter } from "./teste.routes";

const router = Router();

router.use("/teste", testeRouter);

export { router };
