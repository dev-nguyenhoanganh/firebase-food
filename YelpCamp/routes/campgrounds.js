const express              = require('express');
const router               = express.Router();
const catchAsync           = require('../utils/catchAsync');
const Campground           = require('../model/campground');
const ExpressError         = require('../utils/ExpressError');
const { campgroundSchema } = require('../schemas');

const validateCampground = (req, resp, next) => {
    const { error } = campgroundSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(', ')
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
}

/**
 * Show all campgrounds
 */
router.get('/', catchAsync(async (req, resp) => {
    const campgrounds = await Campground.find({});
    resp.render('campgrounds/index', { campgrounds })
}));

/**
 * Save new campground into database
 */
router.post('/', validateCampground, catchAsync(async (req, resp) => {
    const campground = new Campground(req.body.campground);
    await campground.save();
    req.flash('success', 'Successfully made a new campground!');
    resp.redirect(`/campgrounds/${campground._id}`);
}));

/**
 * Add new campground
 */
router.get('/new', (req, resp) => {
    resp.render('campgrounds/new');
});

/**
 * Show campground information
 */
router.get('/:id', catchAsync(async (req, resp) => {
    const campground = await Campground.findById(req.params.id).populate('reviews');
    if (!campground) {
        req.flash('error', 'Cannot find that campground!');
        return resp.redirect('/campgrounds');
    }
    resp.render('campgrounds/show', { campground });
}));

/**
 * Update campground information
 */
router.put('/:id', validateCampground, catchAsync(async (req, resp) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, {...req.body.campground});
    req.flash('success', 'Successfully updated campground!')
    resp.redirect(`/campgrounds/${campground._id}`);
}));

/**
 * Delete one Campground
 */
router.delete('/:id', catchAsync(async (req, resp) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted campground!');
    resp.redirect(`/campgrounds`);
}));

/**
 * Edit campgrounds
 */
router.get('/:id/edit', catchAsync(async (req, resp) => {
    const campground = await Campground.findById(req.params.id);
    if (!campground) {
        req.flash('error', 'Cannot find that campground!');
        return resp.redirect('/campgrounds');
    }
    resp.render('campgrounds/edit', { campground });
}));

module.exports = router;