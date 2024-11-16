import express from 'express';
import { getAllRoutines, createRoutine } from '../models/routineModel.js';

const router = express.Router();

// Get all routines
router.get('/', async (req, res) => {
  try {
    const routines = await getAllRoutines();
    res.json(routines);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new routine
router.post('/', async (req, res) => {
  try {
    await createRoutine(req.body);
    res.status(201).json({ message: 'Routine added' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
