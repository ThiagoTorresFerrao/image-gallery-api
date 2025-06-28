const imageModel = require('../models/imageModel');

exports.listImages = async (req, res) => {
  const images = await imageModel.getAll();
  res.render('index', { images });
};

exports.likeImage = async (req, res) => {
  const { id } = req.params;
  await imageModel.like(id);
  res.redirect('/');
};