const express = require('express');

// set up the router
const router = express.Router();

// get a list of ninjas from db
router.get('/ninjas', function(req, resp) {
	console.log('GET some ninjas');
	resp.send({type: 'GET'});
});

// add new ninja to db
router.post('/ninjas', function(req, resp) {
	console.log('ADD some ninjas');
	resp.send({type: 'POST'});
});

// Update ninjas in the db
router.put('/ninjas/:id', function(req, resp) {
	console.log('EDIT some ninjas');
	resp.send({type: 'PUT'});
});

// Delete ninjas from db
router.delete('/ninjas/:id', function(req, resp) {
	console.log('DELETE some ninjas');
	resp.send({type: 'DELETE'});
});

// Export all this to our express app in index.js
module.exports = router;