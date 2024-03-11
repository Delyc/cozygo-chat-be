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