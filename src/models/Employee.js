const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  office: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  }
}, {
  timestamps: true,
  versionKey: false,
})

module.exports = mongoose.model('Employee', EmployeeSchema);