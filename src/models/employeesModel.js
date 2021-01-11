const mongoose = require('mongoose'); 

const employeeSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        required: true
    }
}, {
    collection: 'Employees'
});

module.exports = mongoose.model("Employees", employeeSchema);