import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },

  accountType: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  profilePictureUrl: {
    type: String,
    required: true,
  },
  phone: {
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

  insta:{
    type: String,
  },
  tiktok:{
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