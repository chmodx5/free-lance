const express = require("express");
const {
  getArtists,
  createArtist,
  getArtist,
  deleteArtist,
  updateArtist,
} = require("../controllers/artistsController");

const router = express.Router();

router.get("/", getArtists);

router.post("/", createArtist);

router.get("/:id", getArtist);

router.delete("/:id", deleteArtist);

router.patch("/:id", updateArtist);

module.exports = router;
