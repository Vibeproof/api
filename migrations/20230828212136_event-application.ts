// For more information about this file see https://dove.feathersjs.com/guides/cli/knexfile.html
import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('event-applications', (table) => {
    table.uuid('id', { primaryKey: true })

    table.string('public_key')
    table.text('keystore')

    table.uuid('event_id')
      .index()
      .references('id')
      .inTable('events')
      .notNullable()
    table.text('message')
    table.text('contacts')

    table.string('vault_id').index()
    table.text('proof')

    table.text('shared_key')

    table.datetime('timestamp')
    table.text('signature')
    table.text('owner').index()
    table.integer('version')

    table.string('cid')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('event-applications')
}
