import express from 'express';
const router = express.Router();
import registerUser from '../controllers/userControllers.js';

router.route('/').post(registerUser);
// router.post('/login', authUser);

export default router;