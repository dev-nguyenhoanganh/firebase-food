const jwt = require("jsonwebtoken");
const _CONF = require("../config");

module.exports.isAuthentication = (req, res, next) => {
    const { token } = req.headers;
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, _CONF.SECRET, function (err, decoded) {
            console.log(decoded);
            if (err) {
                delete _CONF.refreshTokens[decoded.id];
                console.error(err.toString());
                return res.status(401).json({
                    error: true,
                    message: "Unauthorized access.",
                    err,
                });
            } else if (_CONF.refreshTokens[decoded.id]?.token === token) {
                req.user = decoded;
                next();
            } else {
                return res
                    .status(401)
                    .json({ error: true, message: "Unauthorized access." });
            }
        });
    } else {
        return res.status(403).json({
            error: true,
            message: "No token provided.",
        });
    }
};

module.exports.isAuth = (req, res, next) => {
    const refreshToken = req.headers.refreshToken;
    if (refreshToken) {
        // verifies secret and checks exp
        jwt.verify(refreshToken, _CONF.SECRET_REFRESH, function (err, decoded) {
            if (err) {
                delete _CONF.refreshTokens[decoded.id];
                console.error(err.toString());
                return res.status(401).json({
                    error: true,
                    message: "Unauthorized access.",
                    err,
                });
            } else if (refreshToken in _CONF.refreshTokens[decoded.id]) {
                next();
            }
            return res
                .status(401)
                .json({ error: true, message: "Unauthorized access." });
        });
    } else {
        return res.status(403).json({
            error: true,
            message: "No refreshToken provided.",
        });
    }
};
