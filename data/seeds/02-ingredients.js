
exports.seed = function(knex, Promise) {
  return knex('table_name').insert([
    {id: 1, name: 'cereal', quantity: '1 cup', recipe_id: 1},
    {id: 2, name: 'milk', quantity: '1 cup', recipe_id: 1},
    {id: 3, name: 'eggs', quantity: '3 eggs', recipe_id: 2},
    {id: 4, name: 'cheese', quantity: '1 slice', recipe_id: 3},
    {id: 5, name: 'bread', quantity: '2 pieces', recipe_id: 3},
    {id: 6, name: 'butter', quantity: '1 tsb', recipe_id: 3},   
  });
};
