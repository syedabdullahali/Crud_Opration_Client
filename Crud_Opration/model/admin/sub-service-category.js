const mongoose = require('mongoose');

const subServiceCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  serviceCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ServiceCategory',
    required: true
  }
});



const SubServiceCategory = mongoose.model('SubServiceCategory', subServiceCategorySchema);

module.exports = SubServiceCategory ;
