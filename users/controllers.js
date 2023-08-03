const user = require("./model")

const registerUser = async (req, res) => {
    try { 
        const user = await user.create ({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })

        res.status(201).json({
            message: "successfully registered",
            user: {username: req.body.username, email: req.body.email}
        })


    } catch (error) {
        res.status(501).json ({errorMessage: error.message, error:error})


    }
}

module.exports = {
    registerUser
}

