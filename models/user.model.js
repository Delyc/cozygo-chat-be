import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  faceBook:{
    type: String,
  },
  insta:{
    type: String,
  },
  twitter:{
    type: String,
    required: true
  },
  youtube:{
    type: String,
  }
  // email:{

  // }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User