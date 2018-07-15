const express = require("express");
const router = express.Router();

// @route   GET app/users/test
// @desc    Tests post route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

module.exports = router;
