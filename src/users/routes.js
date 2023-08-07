const { Router } = require("express")

const userRouter = Router()


const { registerUser, login, } = require("./controllers")
const { hashPass, comparePass, tokenCheck } = require("../middleware/index")

userRouter.post("/users/register", hashPass, registerUser)
userRouter.post("/users/login", comparePass, login)

module.exports = userRouter


