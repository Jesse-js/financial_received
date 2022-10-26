import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTable('receivable', function(table){
        table.increments('entry_id');
        table.string('entry_description', 255).notNullable();
        table.string('entry_category', 150).notNullable();
        table.decimal('entry_value').notNullable();
        table.date('entry_date').notNullable();
    });
   
}


export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTableIfExists('receivable');
}

