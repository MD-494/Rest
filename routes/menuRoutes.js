import express from 'express';  // Replace require with import
const router = express.Router();
import MenuItem from '../models/MenuItem.js';




// Get all menu items
router.get('/', async (req, res) => {
    try {
        const menuItems = await MenuItem.find();
        res.json(menuItems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new menu item
router.post('/', async (req, res) => {
    const { name, description, price, category, available } = req.body;
    const menuItem = new MenuItem({ name, description, price, category, available });

    try {
        const savedMenuItem = await menuItem.save();
        res.status(201).json(savedMenuItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a menu item
router.put('/:id', async (req, res) => {
    try {
        const updatedMenuItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedMenuItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a menu item
router.delete('/:id', async (req, res) => {
    try {
        await MenuItem.findByIdAndDelete(req.params.id);
        res.json({ message: 'Menu item deleted' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default router;

