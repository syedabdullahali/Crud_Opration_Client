const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true ,},
    createdAt: { type: Date, default: Date.now },
    status: { type: Boolean, default: true },
    password:{ type:String,require:true},
    otp:String
});

module.exports = mongoose.model('Admin', adminSchema);

// Danishqureshi8817@gmail.com
//Danish@12345**