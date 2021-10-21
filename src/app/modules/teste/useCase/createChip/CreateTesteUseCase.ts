import { Teste } from "@modules/teste/infra/entities/Teste";
import { TesteRepository } from "@modules/teste/infra/repositories/TesteRepository";

interface IRequest {
  name: string;
}

const chipRepository = new TesteRepository();

class CreateTesteUseCase {
  async execute({ name }: IRequest): Promise<Teste> {
    const teste = Object.assign(new Teste(), {
      name,
    });

    await chipRepository.create(teste);

    return teste;
  }
}

export { CreateTesteUseCase };
