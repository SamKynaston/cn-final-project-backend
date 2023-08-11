const {Sequelize} = require("sequelize") //SQL System
const connection = new Sequelize(process.env.SQL_URI, {
    logging: false, 
    retry: {
        match:[/Deadlock/i],
        max:3,
        backoffBase:1000,
        backoffExponent:1.5,
    }})
connection.authenticate()

module.exports = connection