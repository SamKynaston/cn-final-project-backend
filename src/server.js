require ("dotenv").config
const express = require("express")

const port = process.env.PORT || 5001

const app = express()

app.use = (express.json())

const userRouter = require("./users/routes")
const User = require ("./users/model")

app.use(userRouter)


const syncTables = () => {
    user.sync()

}

app.get("/health", (req, res) => {
    res.status(200).json({message:"API is working"})
})

app.listen(port, () => {
    syncTables
    console.log (`server is listening on port ${port}`)


})

