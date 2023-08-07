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
            token: await jwt.sign({id: user.id}, process.env.SECRET)
        })
    } catch (error) {
        res.status(501).json ({errorMessage: error.message})
    }
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
        res.status(501).json({ errorMessage: error.message });
    }
}

const findUser = async(req, res) => {
    try {
        let UserFound = await User.findOne({where: req.body})

        if (!UserFound) {throw new Error("User not found")}

        console.log(UserFound)

        res.status(200).json({
            message: "success",
            user: {
                username: UserFound.username
            },
        })
    } catch (err) {
        res.status(501).json({ errorMessage: err.message });
    }
}

module.exports = {
    registerUser,
    login,
    findUser
}

