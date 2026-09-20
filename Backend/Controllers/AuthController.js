const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};


module.exports.Login = async (req, res) => {
    try {

        console.log("LOGIN REQUEST RECEIVED");
        console.log("BODY:", req.body);

        const { email, password } = req.body;

        console.log("Finding user...");

        const user = await User.findOne({ email });

        if (!user) {
            console.log("USER NOT FOUND");

            return res.status(401).json({
                message: "User not found",
                success: false
            });
        }

        console.log("User found:", user.email);
        console.log("Checking password...");

        const auth = await bcrypt.compare(password, user.password);

        console.log("Password result:", auth);

        if (!auth) {
            return res.status(401).json({
                message: "Incorrect password",
                success: false
            });
        }

        console.log("Creating token...");

        const token = createSecretToken(user._id);

        console.log("Token created");

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "lax",
            secure: false
        });

        console.log("Sending login response...");

        return res.status(200).json({
            message: "Login successful",
            success: true,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });

    } catch (error) {

        console.log("LOGIN ERROR:", error);

        return res.status(500).json({
            message: "Server error",
            success: false
        });
    }
};