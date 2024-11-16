import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routineRoutes from './routes/routineRoutes.js';
import { db } from './db/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/routines', routineRoutes);

// Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
