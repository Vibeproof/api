// For more information about this file see https://dove.feathersjs.com/guides/cli/knexfile.html
import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('event-application-responses', (table) => {
    table.uuid('id', { primaryKey: true })

    table.integer('type')
    table.uuid('event_application_id')
      .index()
      .references('id')
      .inTable('event-applications')
      .notNullable()
    table.text('shared_key')

    table.datetime('timestamp')
    table.text('signature')
    table.integer('version')

    table.string('cid')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('event-application-responses')
}
