//* Import express and initialize the routers
const express = require('express');
const router = express.Router();

//* Call the controller with the metods
const employeesController = require('../controller/employeesController');

//* Defined the methods
router.get( '/', employeesController.getEmployees); //localhost:5000/employees/
router.get( '/id/:id', employeesController.getEmployeesById); //localhost:5000/employees/id/xxxx
router.get( '/role/:role', employeesController.getEmployeesByRole); //localhost:5000/employees/role/
router.post( '/add', employeesController.postEmployee); //localhost:5000/employees/add
router.put( '/update/:id', employeesController.updateEmployee); //localhost:5000/employees/update/xxxx
router.delete( '/delete/:id', employeesController.deleteOneEmployee); //localhost:5000/employees/delete/xxxx

module.exports = router;