const express = require('express');
const router = express.Router();
const infosCtrl = require('../controllers/infos');

router.post('/characters/:id/info', infosCtrl.create);

module.exports = router;