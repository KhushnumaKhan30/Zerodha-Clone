const jwt = require("jsonwebtoken");


module.exports.isAuthenticated = (req, res, next) => {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Please login first"
        });
    }

    try {

        const decoded = jwt.verify(
            token,
            process.env.TOKEN_KEY
        );

        req.userId = decoded.id;

        next();

    } catch (error) {

        return res.status(401).json({
            message: "Invalid or expired token"
        });

    }
};