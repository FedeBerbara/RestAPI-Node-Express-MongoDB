//* Require the functions that interact with the database
const employeeServices = require('../services/employeeService');

exports.getEmployees = async (req, res) => {

    try {
        const employees = await employeeServices.getEmployees();
        res.status(200).json({ employees });
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
        res.status(200).json({ employee });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

exports.getEmployeesByRole = async (req, res) => {

    let role = req.params.role;

    try {
        role = await employeeServices.getEmployeesByRole(role);
        res.status(200).json({ role })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

exports.postEmployee = async (req, res) => {

    const bodyData = req.body;

    try {
        const newEmployee = await employeeServices.createEmployee(bodyData);
        res.status(201).json({ newEmployee });
    } catch (error) {
        res.status(401).json({
            message: error.message
        });  
    }
};

exports.updateEmployee = async (req, res) => {

    const bodyData = req.body;
    let employee; 

    try {
        employee = await employeeServices.updateEmployee(req.params.id, bodyData);
        res.status(200).json({
            message: "Employee modified succesfully"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.deleteOneEmployee = async (req, res) => {

    let employee; 

    try {
        employee = await employeeServices.deleteOneEmployee(req.params.id);
        res.status(200).json({ 
            message: "Employee deleted succesfully"
         });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};