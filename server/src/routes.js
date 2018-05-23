var AuthController = require('./controllers/AuthController')
var AuthPolicy = require('./policies/AuthPolicy')
var PatientsController = require('./controllers/PatientsController')
var isAuthenticated = require('./policies/isAuthenticated')

module.exports = function (app) {
  // process the login form   =========================
  app.post('/login',
    AuthController.login)
  // process the signup form  =========================
  app.post('/signup',
    AuthPolicy.signup,
    AuthController.signup)
  // process the Index        =========================
  app.post('/index',
    isAuthenticated)
  // process the patient form =========================
  app.get('/patients',
    PatientsController.index)
  app.get('/patients/:patientId',
    PatientsController.show)
  app.post('/patients',
    PatientsController.post)
  app.put('/patients/:patientId',
    PatientsController.put)
  app.delete('/patients/:patientId',
    PatientsController.delete)
}
