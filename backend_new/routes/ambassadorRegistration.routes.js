import express from "express";
import AmbassadorRegistrationController from "../controllers/ambassadorRegistrationController/ambassadorRegistration.controller.js";

const router=express.Router();
router.post("/a_reg",AmbassadorRegistrationController)

export default router;