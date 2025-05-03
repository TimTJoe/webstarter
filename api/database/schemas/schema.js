const { sql } = require("drizzle-orm");
const { sqliteTable, text} = require("drizzle-orm/sqlite-core"); // Added integer import (though not used in provided code)
// TODO: install this package
// const { createId } = require("@paralleldrive/cuid2");

// Sample
const users = sqliteTable("users", {
  // id: text("id").$defaultFn(() => createId()).primaryKey(),
  id: text("id").primaryKey(),
  fullname: text("fullname").notNull(),
  DOB: text("DOB").notNull(),
  gender: text("gender").notNull(),
  email: text("email").unique(),
  createdAt: text('createdAt').notNull().default(sql`(current_timestamp)`),
});
  

module.exports = {users}