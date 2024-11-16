const express = require("express");
const { getRoutine } = require("../models/routineModel");

const router = express.Router();

router.get("/routines", async (req, res) => {
  try {
    const routines = await getRoutine();
    res.json(routines);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
