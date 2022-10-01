import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import {
  accessChat,
  fetchChats,
  createGroupChat,
} from '../controllers/chatControllers.js';
const router = express.Router();

router.post('/', protect, accessChat);
router.get('/', protect, fetchChats);
router.post('/group', protect, createGroupChat);
// router.put('/group-rename', protect, renameGroup);
// router.put('/group-remove', protect, removeFromGroup);
// router.put('/group-add', protect, addToGroup);

export default router;
