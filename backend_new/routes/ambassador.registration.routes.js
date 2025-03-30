const AmbassadorRegistrationController = require("../controllers/ambassadorRegistrationController/ambassador.registration.controller");

const router=require("express").Router();
router.post("/a_reg",AmbassadorRegistrationController)

module.exports=router;