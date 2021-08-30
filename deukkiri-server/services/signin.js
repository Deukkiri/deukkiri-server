var db = require('../modules/db-connection');
var sql = require('../sql/signin');

exports.signInCheck = async function (req) {
    const { emailAddress, userPassword } = req.body;
    let [checkAccount] = await db.query(sql.checkSignIn, [emailAddress, userPassword])
    if (checkAccount.length != 0) {
        console.log(checkAccount["count"], "return true");

        return true;
    }
    else return false;
}
