
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    {id: 1, 'Cereal'},
    {id: 2, 'Scrambled Eggs'},
    {id: 3, 'Grilled Cheese'},
  ]);
};
