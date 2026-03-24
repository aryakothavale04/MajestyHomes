const User = require("../models/user.js");

module.exports.getSignUp = (req, res) => {
    res.render("users/signup.ejs")
}

module.exports.postSignUp = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registerUser = await User.register(newUser, password);
        console.log(registerUser);
        req.login(registerUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to MajestyHomes!");
            res.redirect("/listings");
        })

    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
}

module.exports.getLogIn = (req, res) => {
    res.render("users/login.ejs");
};

module.exports.postLogIn = async (req, res) => {
        req.flash("success","Welcome to MajestyHomes");
        let redirectURL = res.locals.redirectURL || "/listings";
        res.redirect(redirectURL);
    }

module.exports.logOut=(req, res, next) => {
    req.logout((err) => {
        if (err) {
            next(err);
        }
        req.flash("success", "You are logged out.");
        res.redirect("/listings");
    })
}
