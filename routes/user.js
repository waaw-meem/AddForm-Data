const express = require('express')

const adminController = require("../controllers/admin")
const userController = require("../controllers/user")

const routes = express.Router()


routes.get('/',userController.getIndexPage)

module.exports = routes

