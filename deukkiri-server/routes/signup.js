/** * @author Jaeyong Park <scorpion@dgu.ac.kr> */

var express = require('express');
var router = express.Router();
var signupBusinnessModules = require('../services/signup')

/** 
 * @description signup routine.
 * @param {JSON} req {
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
router.post('/', async function(req, res, next) {
  try {
      if(await signupBusinnessModules.duplicationCheck(req)){
        var ret = await signupBusinnessModules.signupModule(req)
        res.status(200).send({
          result : true,
          message : 'Successfully signed up',
          data : ret
        })
      }else{
        res.status(200).send({
          result : false,
          message : 'already exists in enrolled email.',
          data : ret
        })
      }
  } catch (error) {
    console.log(error)
    res.status(200).send({
        result : false,
        message : 'Signup failed'
    })
  }
});
module.exports = router;