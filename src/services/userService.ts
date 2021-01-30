
import { db, sql } from "../store/pg";
import { userType } from "../schema/types/index";

export async function getUserByEmail(email: string) {
  try {
    return db
      .query(sql`SELECT * FROM users WHERE email = ${email}`)
      .then(([data]) => data);
  } catch (error) {
    console.error(error);
    return error;
  }
}

//add user
export async function createUser(data: userType) {
  try {
    return db
      .query(
        sql`INSERT INTO users(name, email, password, user_type) VALUES(${data.name}, ${data.email}, ${data.password},${data.user_type}) RETURNING *`,
      )
      .then(([data]) => data);
  } catch (error) {
    return error.message;
  }
}

//get user by Id
export async function getUserById(id: string) {
  try {
    return db
      .query(sql`SELECT * FROM user WHERE id = ${id}`)
      .then(([data]) => data);
  } catch (error) {
    console.error(error);
    return -1;
  }
}