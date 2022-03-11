const router = require('express').Router();

const paymentRouter = require('./payment');
const authRouter = require('./auth');
const webhookRouter = require('./webhook');
const authenticate = require('../middleware/authenticate');

router.use('/auth', authRouter);
router.use('/payment', authenticate, paymentRouter);
router.use('/webhook', webhookRouter);

module.exports = router;
