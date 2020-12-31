//* Require the functions that interact with the database
const employeeServices = require('../services/employeeService');
const Employees = require('../models/employeesModel');

exports.getEmployees = async (req, res) => {

    try {
        const employees = await employeeServices.getEmployees();
        res.json(employees);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.getEmployeesById = async (req, res) => {
    
    let employee; 

    try {
        employee = await employeeServices.getOneEmployee(req.params.id);
        res.json(employee);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

exports.getEmployeesByRole = async () => {

};

exports.postEmployee = async (req, res) => {

    const employeeData = new Employees({
        name: req.body.name,
        last_name: req.body.last_name,
        email: req.body.email,
        age: req.body.age
    })

    try {
        const newEmployee = await employeeData.save();
        res.status(201).json({
            newEmployee
        });
    } catch (error) {
        res.status(401).json({
            message: error.message
        });  
    }
};

exports.updateEmployee = async () => {

};

exports.deleteOneEmployee = async () => {

};

exports.deleteAllEmployees = async () => {

};