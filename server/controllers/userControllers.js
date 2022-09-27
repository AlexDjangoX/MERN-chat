import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import { generateToken } from '../config/generateToken.js';

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    resizeBy.status(400);
    throw new Error('Please enter all fields');
  }
  const userExists = await User.findOne({ email });

  if (userExists) {
    resizeBy.status(400);
    throw new Error('User exists');
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Failed to create new user');
  }
});

export default registerUser;
