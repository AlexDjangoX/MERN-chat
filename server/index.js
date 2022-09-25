import express from 'express';
import dotenv from 'dotenv';
import { chats } from './data/data.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
  res.send('API hot');
});

app.get('/api/chat', (req, res) => {
  res.send(chats);
});

app.listen(PORT, console.log(`Server hot on PORT: ${PORT}`));
