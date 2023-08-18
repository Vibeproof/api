import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('events', (table) => {
    table.dropColumn('text')

    table.string('title');
    table.string('organizer')
    table.text('description')

    table.specificType('tags', 'text ARRAY')
    table.string('link')

    table.text('note')
    table.boolean('note_encrypted')

    table.string('location')

    table.datetime('registration_start')
    table.datetime('registration_end')

    table.integer('capacity')

    table.datetime('start')
    table.datetime('end')

    table.integer('price')

    table.jsonb('sismo')

    table.datetime('timestamp')
    table.text('signature')
    table.text('owner')

    // table.timestamps();
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('events', (table) => {
    table.string('text')

    table.dropColumn('title')
    table.dropColumn('organizer')
    table.dropColumn('description')
    table.dropColumn('tags')
    table.dropColumn('link')
    table.dropColumn('note')
    table.dropColumn('note_encrypted')
    table.dropColumn('location')
    table.dropColumn('registration_start')
    table.dropColumn('registration_end')
    table.dropColumn('capacity')
    table.dropColumn('start')
    table.dropColumn('end')
    table.dropColumn('auths')
    table.dropColumn('claims')
    table.dropColumn('timestamp')
    table.dropColumn('signature')
    table.dropColumn('øwner')
  })
}
