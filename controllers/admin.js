const users = []

exports.getAddUser = (req,res,next) => {
    res.render('userForm',{
        pageTitle:'User Form'
    })
}

exports.postAddUser = (req,res,next) => {
    users.push(({ 
        userName: req.body.name,
        userEmail:req.body.email,
        dob:req.body.dob,
        gender:req.body.gender,
        country:req.body.country,
        shortBio:req.body.bio
    }))
    res.redirect('/')
}

exports.users = users;