import createConnectionPool, {sql} from '@databases/pg';

    // N.B. you will need to replace this connection
    // string with the correct string for your database.
    const db = createConnectionPool(
      process.env.DATABASE_URL
    );

    
    export { db, sql };