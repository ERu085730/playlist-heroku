const express = require('express');
const listController = require('../controllers/listController');

const router = express.Router();

router.get('/', listController.list_index); 
router.post('/', listController.list_create_post);
router.get('/create', listController.list_create_get);
router.get('/:id', listController.list_details);
router.post('/:id', listController.list_new_video);
router.delete('/:id', listController.list_delete);

module.exports = router;