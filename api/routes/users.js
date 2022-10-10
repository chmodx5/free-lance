const express = require("express");
const router = express.Router();
import { login, register } from "./../controllers/authController";

router.get("/", getArtists);

router.post("/", createArtist);

router.get("/:id", getArtist);

router.delete("/:id", deleteArtist);

router.patch("/:id", updateArtist);

module.exports = router;
