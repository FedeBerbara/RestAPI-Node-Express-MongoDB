const Employees = require('../models/employeesModel');

const getEmployees = async () => {
    return await Employees.find();
};

const getOneEmployee = async (id) => {
    return await Employees.findById( id );
};

const getEmployeesByRole = async (role) => {
    return await Employees.find({ role });
};

const createEmployee = async (bodyData) => {

    const employeeData = new Employees({
        name: bodyData.name,
        last_name: bodyData.last_name,
        email: bodyData.email,
        age: bodyData.age,
        role: bodyData.role
    });

    return await employeeData.save()
};

const updateEmployee = async (id, bodyData) => {
    return await Employees.findByIdAndUpdate( id, bodyData, {useFindAndModify: false} );
};

const deleteOneEmployee = async (id) => {
    return await Employees.findByIdAndDelete( id )
};

module.exports = { getEmployees, getOneEmployee, getEmployeesByRole, createEmployee, updateEmployee, deleteOneEmployee, };