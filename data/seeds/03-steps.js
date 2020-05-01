
exports.seed = function(knex) {
  return knex('steps').insert([
    {id: 1, instructions: 'Poor cereal into a bowl', recipe_id: 1},
    {id: 2, instructions: 'Poor milk into bowl and mix together', recipe_id: 1},
    {id: 3, instructions: 'Whisk eggs in a bowl', recipe_id: 2},
    {id: 4, instructions: 'Place in medium pan', recipe_id: 2},
    {id: 5, instructions: 'Stir until eggs are cooke', recipe_id: 2},
    {id: 6, instructions: 'Butter one side of each piece of bread', recipe_id: 3},
    {id: 7, instructions: 'Place one piece of bread on skillet butter side down', recipe_id: 3},
    {id: 8, instructions: 'Place cheese ontop of bread', recipe_id: 3},
    {id: 9, instructions: 'Place second piece of bread ontop of cheese butter side up', recipe_id: 3},
    {id: 10, instructions: 'Let sit until bottom side and golden brown then flip', recipe_id: 3},
    {id: 11, instructions: 'Let second side sit until golden brown then remove from skillet', recipe_id: 3}
  ]);
};
