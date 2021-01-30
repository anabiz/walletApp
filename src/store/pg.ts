import createConnectionPool, {sql} from '@databases/pg';

    // N.B. you will need to replace this connection
    // string with the correct string for your database.
    const db = createConnectionPool(
      'postgres://weehppkf:cEXRrWDCmGHacyu4U1S8ZB-zFCMTZIC6@ziggy.db.elephantsql.com:5432/weehppkf',
    );
  
    const results = db.query(sql`
      SELECT 1 + 1 as result;
    `);
  
    console.log(results);
    // => [{result: 2}]
  
    //db.dispose();
    export { db, sql };