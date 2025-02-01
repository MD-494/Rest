// server.js
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import menuRoutes from './routes/menuRoutes.js'; // This should now work
import reservationRoutes from './routes/reservationRoutes.js'; // This should now work
import cors from 'cors'
const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/restaurantDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

// Routes
app.use('/api/menu', menuRoutes);
app.use('/api/reservations', reservationRoutes);

