// models/Reservation.js
import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true }, // e.g., "7:00 PM"
    guests: { type: Number, required: true },
});

const Reservation = mongoose.model('Reservation', reservationSchema);
export default Reservation;

