const jwt = require("jsonwebtoken");
const env = require("./env");

/**
 * JWT token generator
 * Generates a JWT token signed with RS256 algorithm
 *
 * Usage: node gen.js [expiration_minutes]
 * expiration_minutes: Optional. Number of minutes until token expires (default: 60)
 */

const PRIVATE_KEY = env.PRIVATE_KEY;

// Validate private key exists
if (!PRIVATE_KEY) {
  console.error("Error: PRIVATE_KEY is not set in env.js");
  process.exit(1);
}

// Parse and validate command line arguments
const expirationMinutes = (() => {
  const input = process.argv[2];
  if (!input) return 60; // Default to 60 minutes

  const minutes = parseInt(input);
  if (isNaN(minutes) || minutes <= 0) {
    console.error(
      "Error: Expiration time must be a positive number of minutes"
    );
    process.exit(1);
  }
  return minutes;
})();

try {
  const now = Math.floor(Date.now() / 1000);
  const token = jwt.sign(
    {
      iat: now,
      exp: now + expirationMinutes * 60, // Convert minutes to seconds
    },
    PRIVATE_KEY,
    { algorithm: "RS256" }
  );

  console.log(token);
} catch (error) {
  console.error("Error generating JWT token:", error.message);
  process.exit(1);
}
