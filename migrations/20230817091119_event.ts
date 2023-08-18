// For more information about this file see https://dove.feathersjs.com/guides/cli/knexfile.html
import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.raw('CREATE EXTENSION postgis')

  await knex.schema.createTable('events', (table) => {
    table.uuid('id', { primaryKey: true })

    table.string('text')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('events')
}
