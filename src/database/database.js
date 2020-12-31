//* Call the mongoose driver and the environment variables
const mongoose = require('mongoose');
require('dotenv/config');

//* Settings
const mongoURI = process.env.DB_CONNECTION;

const mongoConnection = () => {
    mongoose.connect(mongoURI, {
        useFindAndModify: false,
        useNewUrlParser: true,  
        useUnifiedTopology: true
    }, (error) => {
        if (error) throw error;
        console.log('Connected to DB');
    });
};

module.exports = mongoConnection;