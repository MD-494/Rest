// routes/reservationRoutes.js

import express from 'express'; 

import Reservation from '../models/Reservation.js';
const router = express.Router();

// Get all reservations
router.get('/', async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.json(reservations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new reservation
router.post('/', async (req, res) => {
    const { name, email, phone, date, time, guests } = req.body;
    const reservation = new Reservation({ name, email, phone, date, time, guests });

    try {
        const savedReservation = await reservation.save();//reservation.js
        res.status(201).json(savedReservation);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a reservation
router.put('/:id', async (req, res) => {
    try {
        const updatedReservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedReservation);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a reservation
router.delete('/:id', async (req, res) => {
    try {
        await Reservation.findByIdAndDelete(req.params.id);
        res.json({ message: 'Reservation deleted' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default Reservation;
