import { db } from '../db/index.js';

export const getAllRoutines = async () => {
  return await db.any('SELECT * FROM routines');
};

export const createRoutine = async (routine) => {
  const { course, instructor, time, day } = routine;
  return await db.none(
    'INSERT INTO routines (course, instructor, time, day) VALUES ($1, $2, $3, $4)',
    [course, instructor, time, day]
  );
};
