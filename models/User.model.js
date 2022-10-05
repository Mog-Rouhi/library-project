// const { Schema, model } = require("mongoose");

// // TODO: Please make sure you edit the user model to whatever makes sense in this case
// const userSchema = new Schema(
//   {
//     username: {
//       type: String,
//       // unique: true -> Ideally, should be unique, but its up to you
//     },
//     password: String,
//   },
//   {
//     // this second object adds extra properties: `createdAt` and `updatedAt`
//     timestamps: true,
//   }
// );

// const User = model("User", userSchema);

// module.exports = User;


const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    passwordHash: {
      type: String,
      required: [true, 'Password is required.']
    }
  },
  {
    timestamps: true
  }
);

module.exports = model('User', userSchema);