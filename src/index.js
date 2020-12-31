const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

//* Imports
const router = require('./router');
const mongoConnection = require('./database/database');

//* Initializations
const app = express();
mongoConnection();
require('dotenv/config');

//* Settings
const port = process.env.NODE_PORT;

//* Middlewares 
app.use(morgan('dev'));

//* Enabling cors for all request by usiing cors middleware
app.use(cors());

/**
 * * Parse request of content-type: application/json
 * * Parses inconming request with JSON payloads
 */
app.use( express.json());
app.use(bodyParser.json());
app.use( express.urlencoded( { extended:true } ) );

//* Routes
router(app);

//* Starting the server
app.listen(port, () => {
    console.log(`Server running in port ${port}`);
});