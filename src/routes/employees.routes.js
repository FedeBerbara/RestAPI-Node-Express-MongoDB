//* Import express and initialize the routers
const express = require('express');
const router = express.Router();

//* Call the controller with the metods
const employeesController = require('../controller/employeesController');

//* Defined the methods
router.get( '/', employeesController.getEmployees); //localhost:5000/employees/
router.get( '/id/:id', employeesController.getEmployeesById); //localhost:5000/employees/id/1
router.get( '/role/:role', employeesController.getEmployeesByRole); //localhost:5000/employees/role/admin
router.post( '/addEmployee', employeesController.postEmployee); //localhost:5000/employees/addEmployee
router.put( '/editEmployee/:id', employeesController.updateEmployee); //localhost:5000/employees/editEmployee/1
router.delete( '/deleteEmployee/:id', employeesController.deleteOneEmployee); //localhost:5000/employees/deleteEmployee/1
router.delete( '/deleteEmployees', employeesController.deleteAllEmployees); //localhost:5000/employees/deleteEmployees

module.exports = router;