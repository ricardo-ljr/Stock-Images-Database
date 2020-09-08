exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { username: "Ricardo", password: "123" },
        { username: "User2", password: "password" },
        { username: "User3", password: "hello" }
      ]);
    });
};
