const express = require("express");
const {
  searchFreelancer,
  getSingleFreelancerById,
} = require("../controllers/client/freelancersController");
const router = express.Router();

router.get("/single/:username", getSingleFreelancerById);
router.get("/search", searchFreelancer);

module.exports = router;
