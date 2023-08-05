/** @format */

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/user");
const api_key = require("../config/config");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(api_key.googleAuth);

exports.googleSignUp = (req, res) => {
	const { tokenId } = req.body;

	console.log(process.env.AUTH_GOOGLE);
	client
		.verifyIdToken({ idToken: tokenId, audience: api_key.googleAuth })
		.then((response) => {
			const { email, email_verified, name } = response.payload;
			console.log(response.payload);
			if (!email_verified) {
				const error = new Error("Login failed, User not verified");
				error.statusCode = 403;
				res.status(403).json({ message: "Not Verified" });
				throw error;
			} else if (email_verified) {
				User.findOne({ email: email })
					.then((user) => {
						if (!user) {
							// new user
							bcrypt.hash(Math.random(100), 12).then((hashedPassword) => {
								const Newuser = new User({
									email: email,
									password: hashedPassword,
									isverified: true,
									name: name,
									resetVerified: false,
								});
								Newuser.save()
									.then((result) => {
										res
											.status(201)
											.json({ message: "User Account has been created!" });
									})
									.catch((err) => {
										console.log(err);
									});
							});
						} else {
							res.status(201).json({
								message: "User already has an account",
								username: user.name,
								userId: user._id,
							});
						}
					})
					.catch((err) => {
						console.log(err);
					});
			}
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.googleLogin = (req, res) => {
	const { tokenId } = req.body;

	console.log(process.env.AUTH_GOOGLE);
	client
		.verifyIdToken({ idToken: tokenId, audience: api_key.googleAuth })
		.then((response) => {
			const { email, email_verified, name } = response.payload;
			console.log(response.payload);
			if (!email_verified) {
				const error = new Error("Login failed, User not verified");
				error.statusCode = 403;
				res.status(403).json({ message: "Not Verified" });
				throw error;
			} else if (email_verified) {
				User.findOne({ email: email })
					.then((user) => {
						if (!user) {
							// user doesnt exist
							res.status(404).json({
								message: "User's Account doesnt exist!",
								username: user.name,
								userId: user._id,
							});
						} else {
							const access_token = jwt.sign(
								{ email: email },
								api_key.accessToken,
								{
									algorithm: "HS256",
									expiresIn: api_key.accessTokenLife,
								}
							);

							const refresh_token = jwt.sign(
								{ email: email },
								api_key.refreshToken,
								{
									algorithm: "HS256",
									expiresIn: api_key.refreshTokenLife,
								}
							);

							res.status(201).json({
								message: "User logged in!",
								access_token: access_token,
								refresh_token: refresh_token,
								username: user.name,
								userId: user._id,
							});
						}
					})
					.catch((err) => {
						console.log(err);
					});
			}
		})
		.catch((err) => {
			console.log(err);
		});
};
