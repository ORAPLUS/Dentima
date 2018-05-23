var mongoose = require('mongoose')
var Schema = mongoose.Schema

var PatientSchema = new Schema({
  nom: {
    type: String,
    required: true
  },
  prenom: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true
  },
  user: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
})

module.exports = mongoose.model('Patient', PatientSchema)
