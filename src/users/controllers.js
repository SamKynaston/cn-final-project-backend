// login user, deleteUser, updateUser, (search via username and update email and password)
// find user or search 

const jwt = require("jsonwebtoken")
const User = require("./model")
console.log("!!!!!!!")

const registerUser = async (req, res) => {    
    console.log(req.body)
    try { 
        const user = await User.create ({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })

        res.status(201).json({
            message: "successfully registered",
            user: {username: req.body.username, email: req.body.email},
            token: await jwt.sign({id: req.user.id}, process.env.SECRET)
        })


    } catch (error) {
        console.log(error)
        res.status(501).json ({errorMessage: error.message, error:error})


    }

    console.log("??????")
}


const login = async (req, res) => {
    try { 
        res.status(200).json({
            message: "success",
            user: {
                username: req.user.username
            },
            token: await jwt.sign({id: req.user.id}, process.env.SECRET)
        })
        
    } catch (error) {
        console.log(error)
        res.status(501).json({ errorMessage: error.message, error: error });
    }

    
}

module.exports = {
    registerUser,
    login
}

