const express = require('express');
const request = require('request');
const firebase = require('firebase');

// const {
//   apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId,
// } = require('../apiKey.js');

// const config = {
//   apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId,
// };

// heroku config
const config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
};

const app = firebase.initializeApp(config);
const database = app.database(); // Firebase Database services
const auth = app.auth(); // Firebase Auth services

const router = express.Router();

// post a job on firebase
router.route('/postjob').post((req, res, next) => {
  database.ref('jobs').push().set(req.body)
    .then(() => res.send())
    .catch(err => next(err));
});

// add a user an applicant to a job based of the job id
router.route('/postapplicant/:id').post((req, res, next) => {
  const { id } = req.params;

  database.ref(`jobs/${id}`).update(req.body)
    .then(() => res.send())
    .catch(err => next(err));
});

// get all jobs from firebase
router.route('/getjobs').get((req, res, next) => {
  database.ref('jobs').once('value', (data) => {
    const result = [];
    const firebaseData = data.val();

    // format the data from firebase into an array of object
    for (let key in firebaseData) {
      result.push({
        job: firebaseData[key],
        id: key,
      });
    }

    res.send(result);
  }, err => next(err));
});

// get jobs from github
router.route('/githubjobs').get((req, res, next) => {
  const url = 'http://jobs.github.com/positions.json?description=software&location=san+francisco';
  request.get(url).on('error', err => next(err)).pipe(res);
});

// Sign up new users
router.route('/signup').post((req, res) => {
  const { email, password } = req.body;

  auth.createUserWithEmailAndPassword(email, password)
    .then(state => res.send({ user: state.user.email }))
    .catch(err => res.send({ error: err.message }));
});

// Sign in existing users
router.route('/signin').post((req, res) => {
  const { email, password } = req.body;

  auth.signInWithEmailAndPassword(email, password)
    .then(state => res.send({ user: state.user.email }))
    .catch(err => res.send({ error: err.message }));
});

module.exports = router;
