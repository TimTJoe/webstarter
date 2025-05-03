// PACKAGES
const { drizzle } = require('drizzle-orm/libsql');
const { createClient } = require("@libsql/client");

// SCHEMAS
const schema = require("@database/schemas/schema")
const relations = require("@database/schemas/relations")

function hello(req, res) {
  res.send("Hello World!");
}

function getDate() {
  return new Date().toLocaleDateString("en-CA")
}

const client = createClient({ url: process.env.DB_FILE || "file:./database/main.db", })
// const db = drizzle(client, { schema: { ...schema, ...relations } });
const db = drizzle(client, { schema: { ...schema } });

function isEQ(a, b) {
  return Object.is(a, b);
}

// EXIT POINT
module.exports = { hello, getDate, client, db, isEQ }