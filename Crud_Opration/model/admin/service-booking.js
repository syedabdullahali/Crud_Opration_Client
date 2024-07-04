const mongoose = require("mongoose");

const serviceBookingSchema = new mongoose.Schema({
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "service" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  date:{type:String},
  createAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("service-booking", serviceBookingSchema);
