//* Import the employees.routes file with all de methods
const employeesRoutes = require('./routes/employees.routes');

//* Here I defined the first endpoint
const router = (app) => {
    app.use('/employees', employeesRoutes);
};

module.exports = router;