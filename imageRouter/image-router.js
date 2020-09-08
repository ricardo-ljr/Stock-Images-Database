const router = require("express").Router();

const Image = require("./image-model");

router.get("/", (req, res) => {
  Image.find()
    .then(img => {
      res.status(200).json(img);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve images" });
    });
});

router.get("/:userID", (req, res) => {
  Image.imageByUserid(req.params.userID)
    .then(img => {
      res.status(200).json(img);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not find user id" });
    });
});

router.post("/", (req, res) => {
  const image = req.body;
  Image.add(image)
    .then(img => {
      res.status(201).json(img);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not add image" });
    });
});

module.exports = router;
