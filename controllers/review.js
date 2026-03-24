const Listing = require("../models/listing.js");

const Review = require("../models/review.js");

module.exports.postReview = async(req,res)=>{
    let {id}= req.params;
    let listing =await Listing.findById(id); 
    let newReview = new Review(req.body.review);
    console.log(newReview);
    newReview.author= req.user._id;
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success","Your review was addes successfully. Thanks for your suggestion");
    res.redirect(`/listings/${id}`);
}

module.exports.deleteReview = async(req,res)=>{
    let {id , reviewId}= req.params;
    await Listing.findByIdAndUpdate(id, {$pull : {reviews : reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Review deleted successfully");
    res.redirect(`/listings/${id}`);
}