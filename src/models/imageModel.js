const db = require('../database');

exports.getAll = () => {
  return db('images').select();
};

exports.like = async (id) => {
  const image = await db('images').where({ id }).first();
  if (image) {
    return db('images').where({ id }).update({ likes: image.likes + 1 });
  }
};