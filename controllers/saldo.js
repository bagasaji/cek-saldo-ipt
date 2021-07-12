const Saldo = require('../models/saldo');

exports.postSaldo = async (req, res, next) => {
    try {
        //REQUEST BODY CHECK & VALIDATION
        // if (!req.body) {
        //     const error = new Error('Object body missing!');
        //     console.log(error.message);
        //     error.statusCode = 401;
        //     throw error;
        // }
        // if (!req.body.accountNo) {
        //     const error = new Error('Body: accountNo missing!');
        //     console.log(error.message);
        //     error.statusCode = 401;
        //     throw error;
        // }
        // if (!req.body.clientId) {
        //     const error = new Error('Body: clientId missing!');
        //     console.log(error.message);
        //     error.statusCode = 401;
        //     throw error;
        // }
        // if (!req.body.reqMsgId) {
        //     const error = new Error('Body: reqMsgId missing!');
        //     console.log(error.message);
        //     error.statusCode = 401;
        //     throw error;
        // }

        // const [getResponse] = await Saldo.postSaldo(req.body.accountNo);
        const [getResponse] = await Saldo.postSaldo(req.params.accountId);
        res.status(200).json(getResponse);
        
        // res.setHeader("Content-Type", req.get("Content-Type"));
        // res.setHeader("X-TIMESTAMP", req.get("X-TIMESTAMP"));
        // res.setHeader("X-SIGNATURE", req.get("X-SIGNATURE"));
        // res.status(200).json({
        //     "responseCode": "200",
        //     "responseMessage": "Request has been processed successfully",
            // "clientId": req.body.clientId,
            // "name": getResponse[0].name,
            // "reqMsgId": req.body.reqMsgId,
            // "amount": {
            //     "value": "10000.00",
            //     "currency": "IDR"
            // },
            // "floatAmount": {
            //     "value": "50000.00",
            //     "currency": "IDR"
            // },
            // "holdAmount": {
            //     "value": "20000.00",
            //     "currency": "IDR"
            // },
            // "availableBalance": getResponse[0].amount,
            // "ledgerBalance": "16732765949981,2",
            // "currentMultilateralLimit": "0",
            // "currency": "IDR",
            // "registrationStatusCode": "1",
            // "status": "0001"
        // });
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
}

