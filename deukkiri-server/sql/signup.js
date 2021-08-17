/** * @author Jaeyong Park <scorpion@dgu.ac.kr> */
/** * @module users sql */

module.exports = {
    
    getTheEmailCount : "select count(*) as count from deukkiri_users where emailAddress=?",
    // INSERT
    createNewAccount : "insert into deukkiri_users(emailAddress,userPassword,studentID,GPA,semester,major,university,introduction) values(?,SHA2(?,512),?,?,?,?,?,?)",
}