const db = require("../data/dbConfig.js");

module.exports = { find, add, imageByUserid };

function find() {
  return db("images").select("*");
}

async function add(image) {
  const [id] = await db("images").insert(image, "id");
}

function imageByUserid(id) {
  return db("users")
    .join("images", "users.id", "user_id")
    .select("*")
    .where({ user_id: id });
}
