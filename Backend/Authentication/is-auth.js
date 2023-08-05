/** @format */

const jwt = require("jsonwebtoken");
const api_key = require("../config/config");

exports.authentication = (req, res, next) => {
	let access_token = req.headers["authorization"];
	//console.log(access_token)

	if (!access_token) {
		const error = new Error("Not Authenticated");
		error.statusCode = 401;
		res.status(401).json({ message: "Not Authenticated" });
	} else {
		let access = access_token.split(" ")[1];
		let payload;
		// console.log(access)
		try {
			payload = jwt.verify(access, api_key.accessToken);
		} catch (err) {
			err.statusCode = 401;
			res.status(401).json({ message: "Not Authenticated" });
			throw err;
		}

		if (!payload) {
			const error = new Error("Not Authenticated.");
			res.status(401).json({ messages: "Not Authenticated" });
			error.statusCode = 401;
			throw error;
		}
		//console.log("this is the payload of access token",payload)
		res.userID = payload["username"];
		next();
	}
};

// getting access token using refresh token
exports.GetnewAccessToken = (req, res) => {
	let refresh_token = req.body.refresh_token;

	if (!refresh_token) {
		const error = new Error("Not Authenticated");
		error.statusCode = 401;
		res.status(401).json({ message: "Not Authenticated" });
		throw error;
	} else {
		jwt.verify(refresh_token, api_key.refreshToken, function (err, decoded) {
			if (err) {
				const error = new Error("Not Authenticated.");
				res.status(401).json({ messages: "Not Authenticated" });
				error.statusCode = 401;
				throw error;
			} else {
				const access_token = jwt.sign(
					{ email: decoded["email"] },
					api_key.accessToken,
					{
						algorithm: "HS256",
						expiresIn: api_key.accessTokenLife,
					}
				);

				const refresh_token = jwt.sign(
					{ email: decoded["email"] },
					api_key.refreshToken,
					{
						algorithm: "HS256",
						expiresIn: api_key.refreshTokenLife,
					}
				);

				return res.status(200).json({
					message: "Fetched token successfully",
					access_token: access_token,
					refresh_token: refresh_token,
				});
			}
		});
	}
};
