import { db, sql } from "../store/pg";

export async function getNoobWalletByUserId(userId: string) {
    try {
      return db
        .query(sql`SELECT * FROM wallets WHERE user_id = ${userId}`)
        .then(([data]) => data);
    } catch (error) {
      console.error(error);
      return error.message;
    }
  }


export async function updateWalletBallance(amount: number, userId: string) {
    try {
      return db
        .query(sql`UPDATE wallets SET amount = ${amount} WHERE user_id = ${userId}`)
        .then(([data]) => data);
    } catch (error) {
      console.error(error);
      return { error };
    }
  }

  export async function updateWalletById(amount: number, id: string) {
    try {
      return db
        .query(sql`UPDATE wallets SET amount = ${amount} WHERE id = ${id}`)
        .then(([data]) => data);
    } catch (error) {
      console.error(error);
      return { error };
    }
  }

  export async function getElitWalletByCurrencyId(currency_id: string, userId: string) {
    try {
      return db
        .query(sql`SELECT * FROM wallets WHERE currency_id = ${currency_id} AND user_id = ${userId}`)
        .then(([data]) => data);
    } catch (error) {
      console.error(error);
      return error.message;
    }
  }