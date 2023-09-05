const express = require('express')
const adminController = require("../controllers/admin")

const routes = express.Router()

routes.get('/add-users',adminController.getAddUser)

routes.post('/users',adminController.postAddUser)

exports.routes = routes;