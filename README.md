# JWT Generator

A simple utility to generate JWT tokens for testing purposes. The tool allows generating tokens with custom expiration times.

## Installation

1. Clone the repository

```bash
git clone https://github.com/mtldatacrab/jwt-gen.git
```

2. Install dependencies:

```bash
npm install
```

3. Create your env.js file by copying env.example.js:

```bash
cp env.example.js env.js
```

4. Add your private key to env.js

## Usage

Generate a token with default 1-hour expiration:

```bash
npm run gen
```

Generate a token with custom expiration time (in minutes):

```bash
npm run gen 30  # Creates a token that expires in 30 minutes
```

## Environment Setup

The `env.js` file should contain your RSA private key in the following format:

```javascript
module.exports = {
  PRIVATE_KEY: `-----BEGIN RSA PRIVATE KEY-----
Your private key here
-----END RSA PRIVATE KEY-----`,
};
```

## Notes

- The token is signed using RS256 algorithm
- Expiration time must be a positive number of minutes
- The generated token will be printed to the console
