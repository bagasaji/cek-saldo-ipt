//user model
const db = require('../util/database');

module.exports = class Saldo {
    constructor(accountNo, accountId, name, amount) {
        this.accountNo = accountNo;
        this.accountId = accountId;
        this.name = name;
        this.amount = amount;
    };

    static postSaldo(accountId){
        return db.execute(
            'SELECT * FROM saldo WHERE accountId= ?', [accountId]
        );
    }
}