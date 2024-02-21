const express = require('express');
const router = express.Router();
const validateToken = require('../../middleware/auth');
const { getChainConfigData } = require('../../controllers/chain');

router.get('/config', validateToken, getChainConfigData);

module.exports = router;
