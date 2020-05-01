
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl =>{
        tbl.increments()
        
    })
};

exports.down = function(knex) {
  
};
