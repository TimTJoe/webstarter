require("module-alias/register");
const express = require("express");
const app = express();
const dotenv = require('dotenv');

const { db, hello } = require("@helpers/helpers");

if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: '.env.production' });
} else if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: '.env.development' });
} else {
  //  Load default .env
  dotenv.config();
}

// MIDDLEWARE
app.use(express.json());
app.use((req, res, next) => {
  req.db = db
  next()
})

// ROUTES HANDLER
app.use("/", hello)

// START SERVER
const PORT = process.env.PORT || 8002;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
