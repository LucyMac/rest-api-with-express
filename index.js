const express = require('express');
const routes = require('./routes/api');

//set up express app
const app = express();

//tell app to use routes required above. 
app.use('/api', routes);	//Adding '/api' parameter so it prefixes all routes defined in our routes/api file. 
							//This way '/ninjas' becomes 'api/ninjas', '/ninjas/:id' becomes 'api/ninjas/:id' etc.

//listen for requests
app.listen(process.env.port || 4000, function() {
	console.log('now listening for requests');
});