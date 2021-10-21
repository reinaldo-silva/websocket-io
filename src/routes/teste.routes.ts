import { CreateTesteController } from "@modules/teste/useCase/createChip/CreateChipController";
import { Router } from "express";

const testeRouter = Router();

const createTesteController = new CreateTesteController();

testeRouter.post("/", createTesteController.handle);

export { testeRouter };
