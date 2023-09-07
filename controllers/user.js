const adminData = require("../controllers/admin")
const User = require("../model/user")

exports.getIndexPage = (req,res,next) => {
    User.find()
    .then(users => {
    res.render('AddUser',{
        pageTitle:'Index Page',
        prods:users,
    })
    })
    .catch(err => {
        console.log(err)
    })
}