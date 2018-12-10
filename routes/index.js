const express = require('express');
const router = express.Router();

const contact_controller = require('../controllers/contact');

router.get('/', contact_controller.home);
router.get('/pdf', contact_controller.generate);
router.get('/contact/:id', contact_controller.detail);

module.exports = router;
