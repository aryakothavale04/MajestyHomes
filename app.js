if (process.env.NODE_ENV != "production") {
    require('dotenv').config() // or import 'dotenv/config' if you're using ES6
}
// console.log(process.env) // remove this after you've confirmed it is working

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const expressErrors = require("./utils/expressErrors.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const localStrategy = require("passport-local");
const User = require("./models/user.js");
const MongoStore = require('connect-mongo').default;


const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const DB_URL = process.env.ATLAS_DB_URL;

main()
    .then(() => console.log("ATLAS CONNECTION DONE"))
    .catch(err => console.log("ERROR:", err));

async function main() {
    await mongoose.connect(DB_URL);
}

// mongo store 
const store = MongoStore.create({
    mongoUrl: DB_URL,
    crypto : {
        secret: process.env.SECRET
    },
    touchAfter : 24 * 36000,
});

store.on("error", ()=>{
    console.log("Error in Mongo Session Store", err);
});

//expess-session
const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }
}



app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})

app.get("/demoUser", async (req, res) => {
    let fackUser = new User({
        email: "Aryaa@0012",
        username: "Aryaa",
    })
    let user = await User.register(fackUser, "123a");
    res.send(user);
});

//home route
app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);

app.use((req, res, next) => {
    next(new expressErrors(404, "Page Not Found !"));
})

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something Went Wrong!" } = err;
    res.render("listings/error.ejs", { err })
    console.log("   ---   ", err.stack, "   ---   ");
})

app.listen("3030", () => {
    console.log("3030 is listning...")
})