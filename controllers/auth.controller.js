import User from "../models/user.model.js"
import generateTokenAndSetCookie from "../utils/generateToken.js"
import decodeJWT from "../utils/decodeToken.js";

export const signup = async (req, res) => {
    try {
        console.log("calleddd")
      // Extracting data from the request body
      const { fullname, userId, accountType, companyName, profilePictureUrl, phone, email, password, insta, tiktok, youtube } = req.body;
  
      // Creating a new user instance
      const newUser = new User({
        fullname,
        userId,
        accountType,
        companyName,
        profilePictureUrl,
        phone,
        email,
        password,
        insta,
        tiktok,
        youtube
      });
  
      // Saving the user to the database
      await newUser.save();
  
      // Sending a success response
      res.status(201).json({
        message: "Account created successfully",
        user: newUser
      });
    } catch (error) {
      // Handling errors (e.g., validation errors or unique constraint violations)
      console.error("Signup Error:", error);
      res.status(500).json({
        message: "An error occurred during the signup process",
        error: error.message
      });
    }
  };
export const login = async (req, res) => {
    try {

        const { password, email } = req.body
        const user = await User.findOne({ email })

        console.log("login", user)
        res.status(200).json({
            _id: user._id,
            email: user.email,
        })
    } catch (error) {
        console.log("error", error.message)
    }
}

