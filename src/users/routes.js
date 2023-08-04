const { Router } = require("express")

const userRouter = Router()

const bodyParser = require("body-parser")

const jsonParser = bodyParser.json()
console.log(jsonParser)



const { registerUser, login } = require("./controllers")

userRouter.post("/users/register", registerUser)

module.exports = userRouter, login


