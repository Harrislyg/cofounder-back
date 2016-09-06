const User = require('../models/user')
const basicAuth = require('basic-auth')

function userLoggedIn (req, res, next) {
  const userEmail = req.get('User-Email')
  const authToken = req.get('Auth-Token')
  console.log(basicAuth)
  if (!userEmail || !authToken) return res.status(401).json({error: 'unauthorised'})

  User.findOne({email: userEmail, auth_token: authToken}, (err, user) => {
    if (err || !user) return res.status(401).json({error: 'unauthorised'})

    req.currentUser = user
    next()
  })
}

// The following method allows the authentication token to be passed as HTTP basic authentication header, custom headers or in the query string or body
function userLoggedInAdvanced (req, res, next) {
  // first check if we have HTTP Basic Auth
  const auth = basicAuth(req)
  var userEmail, authToken
  if (auth) {
    userEmail = auth.name
    authToken = auth.pass
  } else {
    // else we just look in the http header or body or params
    userEmail = req.get('User-Email') || req.body.user_email || req.query.user_email
    authToken = req.get('Auth-Token') || req.body.auth_token || req.query.auth_token
  }

  console.log(auth)
  if (!userEmail || !authToken) return res.status(401).json({error: 'unauthorised'})

  User.findOne({email: userEmail, auth_token: authToken}, (err, user) => {
    if (err || !user) return res.status(401).json({error: 'unauthorised'})

    req.currentUser = user
    next()
  })
}

function expertise (req, res) {
  User.find({expertise: req.params.expertise}, function (err, usersArray) {
    if (err) return res.status(401).json({error: '/users users/:expertise error 1'})
    res.status(200).json({usersArray: usersArray})
  })
}

function showUser (req, res) {
  console.log(req.params.id)
  User.findById(req.params.id, function (err, user) {
    if (err) return res.status(401).json({error: '/users users/:id error 1'})
    res.status(200).json({user: user})
  })
}

function updateProfile (req, res, next) {
  User.findOne({email: req.currentUser.email}, (err, user) => {
    if (err) res.status(401).json({error: 'Cannot find user'})
    else {
      // user.name = req.body.name
      // user.email = req.body.email
      // user.password = req.body.password
      user.expertise = req.body.expertise
      user.workexp = req.body.workexp
      user.skills = req.body.skills
      user.education = req.body.education
      user.age = req.body.age
      user.location = req.body.location
      user.partnerexpertise = req.body.partnerexpertise
      user.partnerworkexp = req.body.partnerworkexp
      user.partnerskills = req.body.partnerskills

      user.save(function (err) {
        if (err) res.status(400).json({error: 'cannot update user'})
        res.status(200).json(user)
        next()
      })
    }
  })
}

function getProfile (req, res, next) {
  User.findOne({email: req.currentUser.email}, (err, user) => {
    if (err) res.status(401).json({error: 'Cannot find user'})
    else {
      res.status(201).json({userData: req.currentUser})
    }
  })
}

module.exports = {
  userLoggedIn: userLoggedInAdvanced,
  expertise: expertise,
  showUser: showUser,
  updateProfile: updateProfile,
  getProfile: getProfile

}
