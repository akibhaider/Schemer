const pool = require("../db");

const getRoutine = async () => {
  const result = await pool.query("SELECT * FROM routines");
  return result.rows;
};

module.exports = { getRoutine };
