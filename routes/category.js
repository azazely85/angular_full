const express = require('express');
import upload from '../middleware/upload';
const router = express.Router();
const controller = require('../controllers/category');

router.get('/', controller.getAll);
router.post('/:id', controller.getById);
router.delete('/:id', controller.remove);
router.post('/', upload.single('image'), controller.create);
router.patch('/:id', upload.single('image'), controller.update);

module.exports = router;
