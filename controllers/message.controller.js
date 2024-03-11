import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js"
import { getReceiverSocketId, io } from "../socket/socket.js";
export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const  receiverId  = req.params.receiverId;
        const senderId = req.params.senderId
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })
        if (newMessage) {
            conversation.messages.push(newMessage._id)
        }
        await Promise.all([conversation.save(), newMessage.save()])
        const receiverSocketId = getReceiverSocketId(receiverId)
        console.log("receiver socket id", receiverSocketId)
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage", newMessage)
        }
        res.status(201).json(newMessage)
    } catch (error) {
        console.log("err", error.message)
    }
}

export const getMessages = async (req, res) => {
    try {
        const userToChatId  = req.params.userToChatId;
        const senderId = req.params.senderId;

        console.log("sender id", senderId);
        console.log("receiver id", userToChatId);

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] }
        }).populate("messages");

        // Check if the conversation exists
        if (conversation) {
            res.status(200).json(conversation.messages);
        } else {
            // If there is no conversation between the users, return an empty array
            res.status(200).json([]);
        }
    } catch (err) {
        console.log("err", err.message);
        res.status(500).json({ message: err.message });
    }
}

