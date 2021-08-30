
module.exports = {
    
    // Sign In
    checkSignIn : "select emailAddress, userPassword from deukkiri_users where emailAddress=? and userPassword=SHA2(?,512)",
}