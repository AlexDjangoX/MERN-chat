import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import colors from 'colors';
import userRoutes from './routes/userRoutes.js';

const app = express();
dotenv.config();

connectDB();

const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
  res.send('API hot');
});

app.use('/api/user', userRoutes);

app.listen(PORT, console.log(`Server hot on PORT: ${PORT}`.yellow.italic));
