// Update with your config settings.
module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true, //needed for squlite
    connection: {
      filename: './data/recipes.db3' //this connects to sql database
    },

    migrations:{
     directory: './data/migrations.js'//creates database tables
    },

    seeds: {
      directory:'./data/seeds.js'//populates data base with content
    }
  },
};
