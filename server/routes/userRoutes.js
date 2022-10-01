import express from 'express';
const router = express.Router();
import {
  registerUser,
  authUser,
  getAllUsers,
} from '../controllers/userControllers.js';
import { protect } from '../middleware/authMiddleware.js';

router.post('/', registerUser);
router.get('/', protect, getAllUsers);

router.post('/login', authUser);

export default router;
