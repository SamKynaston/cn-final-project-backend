// login user, deleteUser, updateUser, (search via username and update email and password)
// find user or search 

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
            user: {username: req.body.username, email: req.body.email}
        })


    } catch (error) {
        res.status(501).json ({errorMessage: error.message, error:error})


    }

    console.log("??????")
}


const login = async (req, res) => {
    try {
      console.log ("********** Saying hi from the login controller")

        //                 the id we code into the token
        // this is the one line which will generate the token - a good use of librarites
      const token = await jwt.sign({id: req.user.id}, process.env.SECRET);
     // const token = await jwt.sign(1, process.env.SECRET)
      console.log ("********* token = ", token)

      // res.status(202).json({ message: "success", result });

      res.status(200).json({
            message: "success",
            user: {
              username: req.user.username,
              email: req.user.email,
              token:token
            }
          })
        
    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
    }

    
}

module.exports = {
    registerUser,
    login
}
