const path = require('path')
const USERS = [];

exports.getSignup = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/signupForm.html'));
};

exports.postSignup = (req, res) => {
    const { name, email, password } = req.body;
    const userExists = USERS.find(user => user.email === email);
    if (userExists) {
        return res.redirect('/userExist');
    }
    USERS.push({ name, email, password });
  
    res.render('homePage',{ name })
};

exports.getHomePage = (req, res) => {
   
    res.render('homePage', { name: 'Guest' });
};

exports.getUserExist = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/userExist.html'));
};