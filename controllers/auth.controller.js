import User from "../models/user.model.js"
import generateTokenAndSetCookie from "../utils/generateToken.js"
import decodeJWT from "../utils/decodeToken.js";

export const signup = async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'No token provided' });
        }

        const token = authHeader.split(' ')[1];
        const decodedToken = decodeJWT(token);
        const { firstName, sub: email, firstName: password, profilePictureUrl: profilePicture, insta, youtube, lastName,  phone: phoneNumber, tiktok, id: userId, userName: username,   } = decodedToken.payload
        const newUser = new User({
            firstName,
            email,
            password, 
            profilePicture,
            insta,
            youtube,
            lastName,
            phoneNumber,
            tiktok,
            userId,
            username

        });

        if (newUser) {
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();
            console.log("new user", newUser);
            res.status(201).json({
                _id: newUser._id,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
            });
        } else {
            res.status(400).json({ error: "invalid user data" });
        }
    } catch (error) {
        console.log("error", error.message);
        res.status(500).json({ error: "internal server error" });
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

