exports.up = function(knex) {
  return knex.schema.createTable("images", images => {
    images.increments();
    images.text("name", "longtext").notNullable();
    images.text("description", "longtext");
    images.text("url", "longtext").notNullable();
    images
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("images");
};
