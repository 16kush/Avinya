/** @format */

// sendgrid key
exports.Sendgrid = process.env.SENDGRID_KEY;

// mongo database
exports.mongo = process.env.MONGO_DATABASE;

// jwt authentication
exports.accessToken = process.env.ACCESS_TOKEN_SECRET;
exports.refreshToken = process.env.REFRESH_TOKEN_SECRET;

exports.accessTokenLife = process.env.ACCESS_TOKEN_LIFE;
exports.refreshTokenLife = process.env.REFRESH_TOKEN_LIFE;

//Redis
exports.redisHost = process.env.REDIS_HOST;
exports.redisPassword = process.env.REDIS_PASSWORD;
exports.redisPort = process.env.REDIS_PORT;

// google auth
exports.googleAuth = process.env.AUTH_GOOGLE;
exports.googleCli = process.env.CLI_GOOGLE

//stripe payment
exports.stripePayment = process.env.STRIPE_SECRET_TOKEN;
