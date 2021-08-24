var db = require('../modules/db-connection');
var sql = require('../sql/signin');

exports.signInCheck = async function(req){
    
    let [checkCount] = await db.query(sql.getTheSignIn,[{...req.body}])
    if(checkCount.length !== 0) {
        console.log(checkCount["count"], "return true");
        //when value of the checkCount is exactly 0, then we can create a new account 
        return checkCount[0];
    }
    else return false;
}
