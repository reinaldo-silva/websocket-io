// import { executeQuery } from "@database/pool";
import { ITesteRepository } from "@modules/teste/repositories/ITesteRepository";

import { Teste } from "../entities/Teste";

class TesteRepository implements ITesteRepository {
  async create(teste: Teste): Promise<Teste> {
    // const query = `INSERT INTO tb_chips
    //               (chi_serial_number, chi_name, chi_prevision_date, chi_img, chi_cmp_id,
    //               chi_mac_numeration, chi_status)
    //               VALUES
    //               ($1, $2, $3, $4, $5, $6, $7)
    //               returning chi_serial_number, chi_name, chi_prevision_date, chi_img, chi_cmp_id,
    //               chi_mac_numeration, chi_status`;

    // const { rows } = (await executeQuery(query, [teste.id, teste.name])) as {
    //   rows: Teste;
    // };

    // return rows[0];

    return teste;
  }
}

export { TesteRepository };
