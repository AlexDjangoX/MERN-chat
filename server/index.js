import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import chatRoutes from './routes/chatRoutes.js';
import { notFound } from './middleware/errorMiddleware.js';
import { errorHandler } from './middleware/errorMiddleware.js';

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
  res.send('API hot');
});

app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`Server hot on PORT: ${PORT}`.yellow.italic));
