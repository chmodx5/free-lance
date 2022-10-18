const express = require("express");
const {
  searchFreelancer,
  getSingleFreelancerById,
} = require("../controllers/client/freelancersController");
const router = express.Router();

router.get("/:username", getSingleFreelancerById);
router.get("/search/:searchTerm", searchFreelancer);

module.exports = router;
