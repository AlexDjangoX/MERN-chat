import { Schema, model } from 'mongoose';
import bcryptjs from 'bcryptjs';
import pkg from 'bcryptjs';
const { compare, genSalt, hash } = pkg;

const userSchema = Schema(
  {
    name: { type: 'String', required: true },
    email: { type: 'String', unique: true, required: true },
    password: { type: 'String', required: true },
    pic: {
      type: 'String',
      required: true,
      default:
        'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcryptjs.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await genSalt(10);
  this.password = await hash(this.password, salt);
});

const User = model('User', userSchema);

export default User;
