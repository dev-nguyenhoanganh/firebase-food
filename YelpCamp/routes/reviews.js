const express          = require('express');
const router           = express.Router({ mergeParams: true });
const Review           = require('../model/review');
const catchAsync       = require('../utils/catchAsync');
const Campground       = require('../model/campground');
const ExpressError     = require('../utils/ExpressError');
const { reviewSchema } = require('../schemas');

const validateReview = (req, resp, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(', ')
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
}

router.delete('/:reviewId', catchAsync(async (req, resp) => {
    const { id, reviewId } = req.params;
    await Campground.findByIdAndUpdate(id, {$pull: {reviews: reviewId}})
    await Review.findByIdAndDelete(reviewId);
    req.flash('success', 'Successfully deleted review!');
    resp.redirect(`/campgrounds/${id}`);
}))

router.post('/', validateReview, catchAsync(async (req, resp) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    req.flash('success', 'Successfully create new review!');
    resp.redirect(`/campgrounds/${campground._id}`);
}))

module.exports = router;