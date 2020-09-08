exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("images")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("images").insert([
        {
          name: "An Images",
          description: "I am the description of this image",
          url: "https://unsplash.com/photos/8Myh76_3M2U",
          user_id: 1
        },
        {
          name: "Another Image",
          description: "I am the description of this image",
          url: "https://unsplash.com/photos/F-rvSJl6qI0",
          user_id: 1
        }
      ]);
    });
};
