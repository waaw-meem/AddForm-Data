const User = require("../model/user")

exports.getAddUser = (req,res,next) => {
    res.render('userForm',{
        pageTitle:'User Form',
        editing:false
    })
}

exports.postAddUser = (req,res,next) => {
    const userName = req.body.name
    const userEmail = req.body.email
    // const dob = req.body.dob
    // const gender = req.body.gender
    // const country:req.body.country
    const shortBio = req.body.bio
    const user = new User({
        userName:userName,
        userEmail:userEmail,
        shortBio:shortBio
    })
    user.save()
    .then(result => {
        console.log('User Created!!')
        res.redirect('/')
    })
    .catch(err => {
        console.log(err)
    })
}


exports.getEditUser = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
      return res.redirect('/');
    }
    const prodId = req.params.productId;
    User.findById(prodId)
      .then(user => {
        if (!user) {
          return res.redirect('/');
        }
        res.render('userForm',{
            pageTitle:'Edit User Form',
            editing:editMode,
            user:user
        })
      })
      .catch(err => console.log(err));
  };

  exports.postEditUser = (req, res, next) => {
    const prodId = req.body.productId;
    const updateduserName = req.body.name;
    const updateduserEmail = req.body.email;
    const updateduserBio = req.body.bio;
    console.log('prodId:', prodId);
    console.log('updateduserName:', updateduserName);
    console.log('updateduserEmail:', updateduserEmail);
    console.log('updateduserBio:', updateduserBio);
    
    User.findById(prodId)
      .then(user => {
        user.userName = updateduserName;
        user.userEmail = updateduserEmail;
        user.shortBio = updateduserBio;
        return user.save();
      })
      .then(result => {
        console.log('UPDATED PRODUCT!');
        res.redirect('/');
      })
      .catch(err => console.log(err));
  };
