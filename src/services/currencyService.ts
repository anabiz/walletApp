import { db, sql } from "../store/pg";

export async function createCurrency(data: string) {
  try {
    return db
      .query(
        sql`INSERT INTO currency(name) VALUES(${data}) RETURNING *`,
      )
      .then(([data]) => data);
  } catch (error) {
    return error.message;
  }
}

export async function getCurrencyByName(currencyName: string) {
  try {
    return db
      .query(sql`SELECT * FROM currency WHERE name = ${currencyName}`)
      .then(([data]) => data);
  } catch (error) {
    console.error(error);
    return -1;
  }
}