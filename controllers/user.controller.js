import User from "../models/user.model.js"

export const getUsersForSidebar = async(req, res) => {
    try{

        const loggedInUserId = req.params.userId
        const users = await User.find({_id:{$ne: loggedInUserId}}).select("-password")

        res.status(200).json(users)
    }catch(error) {
        console.log("err", error.message)
    }
}

export const getUserProfile = async (req,res) => {
    try {
        const userId = req.params.id; 
        const user = await User.findById(userId); 

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user); // Send the user data as a response
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
}