const express = require('express');
const router = express.Router();

const saldoController = require('../controllers/saldo')
const authHeaderValidation = require('../../auth-header/controllers/authHeaderValidationController')

//router.get('/', function(req, res, next) {res.send('User Deleted Successfully.')});
//biasanya 2 param di function get, param terakhir di bikin callback function mengarah ke controller
//ada 3 param, fungsi param tengah untuk validation

router.post('/:accountId', authHeaderValidation.postAuthHeaderValidation, saldoController.postSaldo);

module.exports = router;