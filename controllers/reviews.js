const Listing = require("../models/listing");
const Review = require("../models/review");

module.exports.createReview = async (req, res) => {
  let listing = await Listing.findById(req.params.id);
  let newReview = new Review(req.body.review);
  newReview.author = req.user._id;
  listing.review.push(newReview);

  await newReview.save();
  await listing.save();

  req.flash("success", "new review has been created!");
  res.redirect(`/listings/${listing._id}`);
};

module.exports.destroyReview = async (req, res) => {
  let { id, reviewsId } = req.params;
  console.log(id, reviewsId);

  await Listing.findByIdAndUpdate(id, { $pull: { review: reviewsId } });
  await Review.findByIdAndDelete(reviewsId);

  req.flash("success", "review has been deleted!");
  res.redirect(`/listings/${id}`);
};
