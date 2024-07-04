const mongoose = require("mongoose");

const service_schema = new mongoose.Schema({
  category: { type: String },
  serviceName: { type: String },
  pricing: { type: Number },
  duration: { type: Number },
  details: { type: String },
});

const serviceModel = mongoose.model("service", service_schema);
module.exports = serviceModel;