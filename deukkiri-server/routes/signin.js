var express = require('express');
var router = express.Router();
var signInBusinnessModules = require('../services/signin')

/** 
 * @description signup routine.
 * @param {JSON} req.body {
    "emailAddress":"jypark@alcherainc.com",
    "userPassword": "1234",
    "studentID": "2016000000",
    "GPA":1.1,
    "semester":7,
    "major":"컴퓨터공학과",
    "university":"동국대학교",
    "introduction":"개발자입니다."
}
 * @param {JSON} res respond with data result data
 */

router.get('/', async function (req, res, next) {
    try {
        var ret = await signInBusinnessModules.signInCheck(req)
        if (ret) {
            res.status(200).send({
                result: true,
                message: 'Successfully signed in',
                data: ret,
            });
        }else{
            res.status(200).send({
                result: false,
                message: 'The account does not exist',
            });
        }
    } catch (error) {
        console.log(error)
        res.status(200).send({
            result: false,
            message: 'Signin failed',
        });
    }
});

module.exports = router;