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
 
  const db_ca = app.get('db_ca');
  
  if (db_ca) {
    // @ts-ignore
    config.connection.ssl = {
      rejectUnauthorized: true,
      ca: db_ca
    };
  }

  const db = knex(config!)

  app.set('postgresqlClient', db)
}
