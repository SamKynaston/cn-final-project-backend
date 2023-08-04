const { Router } = require("express")

const userRouter = Router()


const { registerUser, login } = require("./controllers")

userRouter.post("/users/register", registerUser)

module.exports = userRouter, login


