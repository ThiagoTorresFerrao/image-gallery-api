const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');

router.get('/', imageController.listImages);
router.post('/images/:id/like', imageController.likeImage);

module.exports = router;