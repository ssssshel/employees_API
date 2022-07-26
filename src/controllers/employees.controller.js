const Employee = require('../models/Employee');
const { } = require('../database/mongoConnect')

function handleEmployeesController() {

  const getEmployees = async (req, res) => {
    try {
      const employees = await Employee.find({})
      if (!employees || employees.length === 0) {
        res.status(404).json({
          message: 'No employees found'
        })
      }
      res.status(200).json(employees)
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  }

  const getEmployee = async (req, res) => {
    try {
      const employee = await Employee.findById(req.params.id)
      if (!employee) {
        res.status(404).json({
          message: 'No employee found'
        })
      }
      return res.status(200).json(employee)
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  }

  const createEmployee = async (req, res) => {
    try {
      const newEmployee = new Employee(req.body)
      newEmployee.save()
      return res.status(201).json(newEmployee)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  const editEmployee = async (req, res) => {
    try {
      const editedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true })
      if (!editedEmployee) {
        return res.status(404).json({
          message: 'No employee found'
        })
      }
      return res.status(200).json(editedEmployee)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  const deleteEmployee = async (req, res) => {
    try {
      const del = await Employee.findByIdAndDelete(req.params.id)
      if (!del) {
        res.status(404).json({
          message: 'No employee found'
        })
      }
      return res.status(200).json('Employee deleted')
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  return {
    getEmployees, getEmployee, createEmployee, editEmployee, deleteEmployee
  }
}

module.exports = handleEmployeesController;