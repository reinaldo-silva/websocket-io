import { Teste } from "../infra/entities/Teste";

interface ITesteRepository {
  create(chip: Teste): Promise<Teste>;
}

export { ITesteRepository };
