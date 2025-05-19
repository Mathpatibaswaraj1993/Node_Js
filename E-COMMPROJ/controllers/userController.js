const User = require('../models/userModel');

// Register
const register = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ message: 'User registered', user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Login (simplified for demo, not using JWT)
 const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });
        if (!user) return res.status(401).json({ message: 'Invalid credentials' });
        res.json({ message: 'Login successful', user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get User
const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update User
const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User updated', user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete User
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


module.exports = { register, login, getUser, updateUser, deleteUser }