const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './image-gallery.sqlite'
  },
  useNullAsDefault: true
});

module.exports = knex;