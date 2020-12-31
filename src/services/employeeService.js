const Employees = require('../models/employeesModel');

const getEmployees = async () => {
    return await Employees.find();
};

const getOneEmployee = async (id) => {
    return await Employees.findById(id);
};

const getEmployeesByRole = async (req) => {
    return await Employees.find(req);
};

const createEmployee = async () => {

};

const updateEmployee = async () => {

};

const deleteOneEmployee = async () => {

};

const deleteAllEmployees = async () => {

};

module.exports = { getEmployees, getOneEmployee, getEmployeesByRole, createEmployee, updateEmployee, deleteOneEmployee, deleteAllEmployees };