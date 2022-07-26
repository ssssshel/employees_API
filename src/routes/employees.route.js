const { Router } = require('express');
const handleEmployeesController = require('../controllers/employees.controller');
const router = Router()

router.get('/', handleEmployeesController().getEmployees)
router.get('/:id', handleEmployeesController().getEmployee)
router.post('/', handleEmployeesController().createEmployee)
router.put('/:id', handleEmployeesController().editEmployee)
router.delete('/:id', handleEmployeesController().deleteEmployee)

module.exports = router;