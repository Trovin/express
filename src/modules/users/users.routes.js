import { Router } from 'express';
import { getUsers, getUserById } from "./users.controllers.js";

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUserById);

export default router;