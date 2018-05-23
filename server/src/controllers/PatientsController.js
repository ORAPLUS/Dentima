var Patient = require('../models/Patient')
var User = require('../models/User')

module.exports = {
  async index (req, res) {
    try {
      var tri = 1
      var limit = 10
      var patients = null
      const search = req.query.search
      // console.log('Search : ' + search)
      if (search) {
        var query = {
          $or:
          [
            {nom: {$regex: search, $options: 'i'}},
            {prenom: {$regex: search, $options: 'i'}}
          ]
        }
        patients = await Patient
          .find(query)
          .limit(limit)
          .sort({ nom: tri })
      } else {
        patients = await Patient
          .find()
          .limit(limit)
          .sort({ nom: tri })
      }
      res.status(200).json({
        success: true,
        patients: patients
      })
    } catch (err) {
      res.status(500).json({
        success: false,
        err: 'an error has occured trying to fetch the patients [' + err.message + ']'
      })
    }
  },
  async show (req, res) {
    try {
      const patient = await Patient.findById(req.params.patientId)
      res.status(200).json({
        success: true,
        patient: patient
      })
    } catch (err) {
      res.status(500).json({
        success: false,
        err: 'an error has occured trying to show the patients [' + err.message + ']'
      })
    }
  },
  async post (req, res) {
    try {
      const {nom, prenom, email, iduser} = req.body
      const user = await User.findById(iduser)
      if (!user) {
        return res.status(400).json({
          success: false,
          err: 'Authentication failed. User not found.'
        })
      }
      const patient = new Patient()
      patient.nom = nom
      patient.prenom = prenom
      patient.email = email
      patient.user = user
      // Add Patient
      await Patient.create(patient)
      res.status(200).json({
        success: true,
        patient: patient
      })
    } catch (err) {
      res.status(500).json({
        success: false,
        err: 'an error has occured trying to create the patient [' + err.message + ']'
      })
    }
  },
  async put (req, res) {
    try {
      const {nom, prenom, email} = req.body
      await Patient
        .findOneAndUpdate({ '_id': req.params.patientId },
          { '$set':
          { 'nom': nom,
            'prenom': prenom,
            'email': email
          }},
          {upsert: true, 'new': true})
        .exec(function (err, patient) {
          if (err) {
            return res.status(500).json({
              success: false,
              err: err.message
            })
          }
          res.status(200).json({
            success: true,
            patient: patient,
            msg: 'Successfully updated'
          })
        })
    } catch (err) {
      res.status(500).json({
        success: false,
        err: 'an error has occured trying to update the patient [' + err.message + ']'
      })
    }
  },
  async delete (req, res) {
    try {
      await Patient
        .findOneAndRemove({ '_id': req.params.patientId })
        .exec(function (err, patient) {
          if (err) {
            return res.status(500).json({
              success: false,
              err: err.message
            })
          }
          res.status(200).json({
            success: true,
            patient: patient,
            msg: 'Successfully removed'
          })
        })
    } catch (err) {
      res.status(500).json({
        success: false,
        err: 'an error has occured trying to remove the patient [' + err.message + ']'
      })
    }
  }
}
