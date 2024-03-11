import express from "express"
import dotenv from "dotenv"
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import connectToMongoDB from "./db/connectToMongoDB.js";
import userRoute from "./routes/user.routes.js"
import cookieParser from "cookie-parser";
import cors from "cors"
import {app, server} from "./socket/socket.js"

 dotenv.config();
 const PORT = process.env.PORT || 4000
 app.use(express.json())
 app.use(cookieParser())
 app.use(cors({
	origin: 'http://localhost:3000' 
  }));

 app.get("/", (req,res) => {
  res.send("hello world")
 })

 app.use("/api/auth", authRoutes)
 app.use("/api/messages", messageRoutes)
 app.use("/api/users", userRoute)

 server.listen(PORT, () => {
	connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});