const { Router } = require("express")

const userRouter = Router()


const { registerUser, login, findUser} = require("./controllers")
const { hashPass, comparePass, tokenCheck } = require("../middleware/index")

userRouter.post("/users/register", hashPass, registerUser)
userRouter.post("/users/login", comparePass, login)

//Customised
userRouter.delete("/user/delete", tokenCheck)
userRouter.patch("/user/edit", tokenCheck)
userRouter.get("/user/find", tokenCheck, findUser)

module.exports = userRouter


