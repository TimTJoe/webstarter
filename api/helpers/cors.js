// Function to determine the origin based on the environment
const origin = () => {
  if (process.env.NODE_ENV === 'production') {
    return "https://example.com"
  } else {
    return process.env.CLIENT_URL
  }
};
// CORS options
const options = {
  origin: origin(),
  methods: process.env.CORS_METHODS || 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: process.env.CORS_CREDENTIALS === 'true',
  // add allowed cors headers
};

module.exports = {origin, options}

