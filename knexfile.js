module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './image-gallery.sqlite',
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
    useNullAsDefault: true,
  },
};