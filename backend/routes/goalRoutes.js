const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

// get and set goals route
router.route("/").get(getGoals).post(setGoal);

// update and delete goals route
router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;
