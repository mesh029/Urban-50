const router = require("express").Router();
const Player = require("../models/Player");

//CREATE PLAYER
router.post("/", async (req, res) => {
  const newPlayer = new Player(req.body);
  try {
    const savedPlayer = await newPlayer.save();
    res.status(200).json(savedPlayer);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET POST
router.get("/:id", async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    res.status(200).json(player);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL POSTS
router.get("/", async (req, res) => {
  const username = req.query.user;

  try {
    let players;
    if (username) {
        players = await Player.find().limit(1).sort({$natural: -1});
    } else {
      players = await Player.find().limit(1).sort({$natural: -1});
    }
    res.status(200).json(players);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
