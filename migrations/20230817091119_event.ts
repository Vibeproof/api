// For more information about this file see https://dove.feathersjs.com/guides/cli/knexfile.html
import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('events', (table) => {
    table.uuid('id', { primaryKey: true })

    table.string('title')
    table.text('description')
    table.integer('seed')

    table.string('public_key')
    table.string('signature_public_key')
    table.text('keystore')

    table.text('application_template')
    table.specificType('contacts', 'text ARRAY')

    table.specificType('tags', 'text ARRAY')
    table.string('link')

    table.text('note')
    table.string('location')
    table.integer('capacity')
    table.integer('price')

    table.jsonb('sismo')

    table.datetime('registration_start')
    table.datetime('registration_end')

    table.datetime('start')
    table.datetime('end')

    table.boolean('public')
    table.boolean('paused')

    table.datetime('timestamp')
    table.text('signature')
    table.text('owner').index()
    table.integer('version')

    table.jsonb('image')
    table.string('cid')
    table.boolean('banned')
    table.integer('rating')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('events')
}
