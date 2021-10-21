import Postgres from "pg";

import env from "../lib/configLoader";

const { Pool } = Postgres;

const connectionPool = new Pool({
  user: env.API_METALQUIP_PG_USER,
  host: env.API_METALQUIP_PG_HOST,
  password: env.API_METALQUIP_PG_PASSWORD,
  database: env.API_METALQUIP_PG_DATABASE,
  port: env.API_METALQUIP_PG_PORT,
  max: env.API_METALQUIP_PG_POOL_SIZE,
});

const endPool = () => connectionPool.end();

const executeQuery = async (sqlQuery: string, sqlParams?: string[]) => {
  return new Promise((resolve, reject) => {
    (async () => {
      let connection;
      try {
        connection = await connectionPool.connect();
        const response = await connection.query(sqlQuery, sqlParams);
        resolve(response);
      } catch (err) {
        reject(err);
      } finally {
        await connection.release();
      }
    })();
  });
};

export { executeQuery, endPool };
