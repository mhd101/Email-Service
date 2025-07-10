const express = require("express")
const router = express.Router()
const EmailController = require("../controllers/EmailController")
const RateLimiter = require("../utils/RateLimiter")


router.post("/sendEmail", RateLimiter, EmailController.sendEmail)

module.exports = router

