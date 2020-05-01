
exports.up = function(knex) {
  return (
      knex.schema
        .createTable('recipes', tbl =>{
            tbl.increments();
            tbl.string('recipe_name')
            .notNullable()
            .unique();
        })
        .createTable('ingredients', tbl =>{
            tbl.increments();
            tbl.string('name').notNullable();
            tbl.string('quantity').notNullable();
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes');
        })
        .createTable('steps', tbl =>{
            tbl.increments();
            tbl.string('instructions').notNullable();
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes');
        })
  );
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('steps')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipes');
};
