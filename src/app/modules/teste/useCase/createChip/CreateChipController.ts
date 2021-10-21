import { Request, Response } from "express";

import { CreateTesteUseCase } from "./CreateTesteUseCase";

class CreateTesteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createTesteUseCase = new CreateTesteUseCase();

    const teste = await createTesteUseCase.execute({
      name,
    });

    return response.status(201).json({
      erro: 0,
      msg: "Teste cadastrado com sucesso",
      teste,
    });
  }
}

export { CreateTesteController };
