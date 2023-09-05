const adminData = require("../controllers/admin")

exports.getIndexPage = (req,res,next) => {
    const users = adminData.users
    res.render('AddUser',{
        pageTitle:'Index Page',
        prods:users,
    })
}