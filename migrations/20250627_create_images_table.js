exports.up = function(knex) {
  return knex.schema.createTable('images', (table) => {
    table.increments('id').primary();
    table.string('title');
    table.string('description');
    table.string('url');
    table.integer('likes').defaultTo(0);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('images');
};