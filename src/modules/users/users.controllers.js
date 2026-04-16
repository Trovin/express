import * as userService from './users.service.js';

export const getUsers = async (req, res) => {
    const users = await userService.getAll();

    res.json(users);
}

export const getUserById = async (req, res) => {
    const id = req.params.id;

    if (!id || isNaN(id)) {
        return res.status(400).json({ message: 'Empty id' });
    }

    const user = await userService.getById(id)

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
}