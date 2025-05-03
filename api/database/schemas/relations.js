const { relations } = require("drizzle-orm");
const { users } = require("./schema");

// Sample
const usersRelations = relations(users, ({ one }) => ({
}));

module.exports = {
  usersRelations,
};