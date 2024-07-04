const mongoose = require('mongoose');

const serviceCategorySchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    description: String,
    subServiceCategories: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SubServiceCategory'
    }]
});

const ServiceCategory = mongoose.model('ServiceCategory', serviceCategorySchema);

module.exports = ServiceCategory 
