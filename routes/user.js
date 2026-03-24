const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectURL } = require("../middleware.js");

const userController = require ("../controllers/user.js");

router
.route("/signup")
.get(userController.getSignUp)
.post(wrapAsync(userController.postSignUp));

router
.route("/login")
.get(userController.getLogIn)
.post(saveRedirectURL,
    passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }),
    wrapAsync(userController.postLogIn));

router.get("/logout", userController.logOut);

module.exports = router;