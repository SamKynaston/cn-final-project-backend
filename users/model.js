const { DataTypes } = require("sequelize")
const connection = require("../db/connection")

const user = connection.define ("user", {
    username: {
        type: DataTypes.STRING,
        allownull: false,
        unique: true


    },
    email: {
        type: DataTypes.STRING, 
        allownull: false
    },
    password: {
        type: DataTypes.STRING, 
        allownull: false
    }





}, 
    {indexes: [{unique: true, fields:["username", "email"]}]}



)

module.exports = user