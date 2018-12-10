const express = require('express');
const router = express.Router();
const contact_controller = require('../controllers/contact');

router.get('/', contact_controller.home);
router.get('/:id', contact_controller.detail);

module.exports = router;
