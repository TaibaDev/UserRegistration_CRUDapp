import express from 'express';

const router = express.Router();
import {addUser, getUsers, getUser, editUser, deleteUser} from '../controller/user-controller.js';

router.post('/add',addUser);
router.get('/all',getUsers);
router.get('/:id',getUser);
router.post('/:id',editUser);
router.delete('/:id',deleteUser)

export default router;