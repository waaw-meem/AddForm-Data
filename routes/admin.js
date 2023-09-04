const express = require('express')


const routes = express.Router()

const users = []

routes.get('/add-users',(req,res,next) => {
    res.render('userForm',{
        pageTitle:'User Form'
    })
})

routes.post('/users',(req,res,next) => {
    users.push(({ userName: req.body.name }))
    res.redirect('/')
})

exports.routes = routes;
exports.users = users;