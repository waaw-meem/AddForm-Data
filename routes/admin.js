const express = require('express')
const adminController = require("../controllers/admin")

const routes = express.Router()

routes.get('/add-users',adminController.getAddUser)

routes.post('/users',adminController.postAddUser)

routes.get('/edit-users/:productId',adminController.getEditUser)

routes.post('/edit-users/:productId',adminController.postEditUser)

exports.routes = routes;