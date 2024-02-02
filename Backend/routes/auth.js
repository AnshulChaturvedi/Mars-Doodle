const express = require("express")

const router = express.Router()

const {signup,login} = require("../Controllers/Auth")
const {createRoom,joinRoom} = require("../Controllers/createAndJoin")
const {auth,isUser} = require("../middlewares/auth")

router.post("/login",login)
router.post("/signUp",signup)
router.post("/create",auth,isUser,createRoom)
router.post("/join",auth,isUser,joinRoom)

module.exports = router;