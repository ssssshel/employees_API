const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
require('dotenv').config()
app.use(morgan('dev'))

app.get('/', (req, res) => { res.send('Bienvenido a la API de empleados') })
app.use('/api/employees', require('./routes/employees.route'))

const port = process.env.PORT || 3001;

module.exports = { app, port };