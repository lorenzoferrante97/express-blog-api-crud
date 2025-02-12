
import express from 'express';
const router = express.Router();

// import post controller
import postController from '../controllers/postController.js';

// route -> index
router.get('/', postController.index);

export default router;