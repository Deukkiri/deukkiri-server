var db = require('../modules/db-connection');
var sql = require('../sql/signin');

exports.signInCheck = async function(req){
    const {emailAddress,userPassword}=req.body;
    let [checkAccount] = await db.query(sql.checkSignIn,[emailAddress,userPassword])
    if(checkAccount.length !== 0) {
        console.log(checkAccount["account"], "return true");
        //when value of the checkCount is exactly 0, then we can create a new account 
        return checkAccount[0];
    }
    else return false;
}
