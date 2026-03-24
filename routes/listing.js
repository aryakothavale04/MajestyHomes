const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner,validateListing }= require("../middleware.js");


const listingController = require ("../controllers/listing.js");
const multer  = require('multer');
const{storage}= require("../cloudConfig.js");
const upload = multer({ storage });

//index route
router.get("/", wrapAsync(listingController.index));

//new route
router
.route ("/new")
.get(isLoggedIn,listingController.getNewListingForm )
.post(isLoggedIn ,upload.single('listing[image]'),validateListing,wrapAsync(listingController.postNewListing ))


// EDIT ROUT
router
.route("/edit/:id")
.get(isLoggedIn, wrapAsync(listingController.getEdit))
.put(isLoggedIn,isOwner,upload.single('listing[image]'),validateListing, wrapAsync(listingController.putEdit))

//delete 
router.delete("/delete/:id",isLoggedIn,isOwner, wrapAsync(listingController.delete))

//show route
router.get("/:id", wrapAsync(listingController.show))

module.exports = router ;