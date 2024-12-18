const jwt = require("jsonwebtoken");
const env = require("./env");

const PRIVATE_KEY = env.PRIVATE_KEY;

if (!PRIVATE_KEY) {
  console.error("PRIVATE_KEY is not set");
  process.exit(1);
}

// Get expiration time from command line argument, default to 60 minutes (1 hour)
const expirationMinutes = parseInt(process.argv[2]) || 60;

// Validate expiration time
if (isNaN(expirationMinutes) || expirationMinutes <= 0) {
  console.error("Expiration time must be a positive number of minutes");
  process.exit(1);
}

const token = jwt.sign(
  {
    sub: "iform-client",
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + (expirationMinutes * 60), // Convert minutes to seconds
  },
  PRIVATE_KEY,
  { algorithm: "RS256" }
);

console.log(token);
