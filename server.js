//Imports
const express = require("express")
require("dotenv").config

//App Config
const port = process.env.PORT || 5002
const app = express()

//Middleware
app.use(express.json())

//Sync Dastabase tables
const syncTables = () => {

}

//Listen on the Selected Port
app.listen(port, () => {
    syncTables
    console.log (`server is listening on port ${port}`)
})