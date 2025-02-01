// models/MenuItem.js
import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    category: { type: String, required: true }, // e.g., Appetizer, Main Course, Dessert
    available: { type: Boolean, default: true }
    
  
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);
export default MenuItem; 

