// For more information about this file see https://dove.feathersjs.com/guides/cli/databases.html
import knex from 'knex'
import type { Knex } from 'knex'
import type { Application } from './declarations'

declare module './declarations' {
  interface Configuration {
    postgresqlClient: Knex
  }
}

export const postgresql = (app: Application) => {
  let config = app.get('postgresql')
 
  // @ts-ignore
  config?.connection?.ssl = true;

  const db_ca = app.get('db_ca');

  console.log('db config');
  console.log(config);
  console.log(db_ca);

  // if (db_ca) {
  //   config = {
  //     ...config,
  //     ssl: true
  //     // @ts-ignore
  //     // ssl: {
        
  //     //   ca: db_ca,
  //     // },
  //   }
  // }

  const db = knex(config!)

  db.raw('select 1+1 as result')
    .then((r) => {
      console.log('db connection success');
      console.log(r);
    })
    .catch((err) => {
      console.log('db connection failed');
      console.log(err);
    })

  app.set('postgresqlClient', db)
}
