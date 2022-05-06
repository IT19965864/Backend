const User = require("../Models/userModel");

/**Auth controllers */

// //Register new user
// exports.signup = catchAsync(async (req, res, next) => {
//   const newUser = await User.create(req.body)
//   createSendToken(newUser, 200, res);
// });

//Login user
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Please provide email and password!", 400));
  }
  //Check if user exists && password is correct
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return "Incorrect email or password";
  } else {
    return "success";
  }
};
