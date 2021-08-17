var db = require('../modules/db-connection');
var sql = require('../sql/signup');

exports.duplicationCheck = async function(req){
    const {emailAddress}=req.body;
    let [checkCount] = await db.query(sql.getTheEmailCount,[emailAddress])
    if(checkCount[0]["count"] == 0) {
        console.log(checkCount["count"], "return true");
        //when value of the checkCount is exactly 0, then we can create a new account 
        return true;
    }
    else return false;
}

exports.signupModule = async function(req){
    const {emailAddress,userPassword,studentID,GPA,semester,major,university,introduction}=req.body;
    let [rows] = await db.query(sql.createNewAccount,[emailAddress,userPassword,studentID,GPA,semester,major,university,introduction])
    console.log(rows)
    return rows;
}