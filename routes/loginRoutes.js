const User = require("../models/userModels");
const router = require("express").Router();

/**Auth controllers */

// //Register new user
// exports.signup = catchAsync(async (req, res, next) => {
//   const newUser = await User.create(req.body)
//   createSendToken(newUser, 200, res);
// });

//Login user
// exports.login = async (req, res, next) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return next(new AppError("Please provide email and password!", 400));
//   }
//   //Check if user exists && password is correct
//   const user = await User.findOne({ email }).select("+password");

//   if (!user || !(await user.correctPassword(password, user.password))) {
//     return "Incorrect email or password";
//   } else {
//     return "success";
//   }
// };
router.route("/login").post(async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await User.findOne({ email });
  if (user && user.password === password && user.email === email) {
    res.status(200).send({ status: user });
  } else {
    res.status(201).send({ msg: "unautherized user" });
  }
});

module.exports = router;
