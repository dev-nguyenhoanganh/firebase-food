const Campground     = require('../model/campground');
const mbxGeocoding   = require('@mapbox/mapbox-sdk/services/geocoding'); 
const { cloudinary } = require('../cloudinary');
const mapBoxToken    = process.env.MAPBOX_TOKEN;
const geocoder       = mbxGeocoding({ accessToken: mapBoxToken });

module.exports.index = async (req, resp) => {
    const campgrounds = await Campground.find({});
    resp.render('campgrounds/index', { campgrounds })
}

module.exports.renderNewForm =  (req, resp) => {
    resp.render('campgrounds/new');
}

module.exports.renderEditForm = async (req, resp) => {
    const { id }     = req.params;
    const campground = await Campground.findById(id);
    if (!campground) {
        req.flash('error', 'Cannot find that campground!');
        return resp.redirect('/campgrounds');
    }
    resp.render('campgrounds/edit', { campground });
}

module.exports.createCampground = async (req, resp) => {
    const geoData = await geocoder.forwardGeocode({
        query: req.body.campground.location,
        limit: 1
    }).send();
    const campground  = new Campground(req.body.campground);
    campground.geometry = geoData.body.features[0].geometry;
    campground.images = req.files.map(f => ({ url: f.path, filename: f.originalname, cloudId: f.filename }));
    campground.author = req.user._id;

    await campground.save();
    req.flash('success', 'Successfully made a new campground!');
    resp.redirect(`/campgrounds/${campground._id}`);
}

module.exports.showCampground = async (req, resp) => {
    const campground = await Campground.findById(req.params.id).populate({
        path    : 'reviews',
        populate: { path: 'author' }
    }).populate('author')
    if (!campground) {
        req.flash('error', 'Cannot find that campground!');
        return resp.redirect('/campgrounds');
    }
    resp.render('campgrounds/show', { campground });
}

module.exports.updateCampground = async (req, resp) => {
    const geoData = await geocoder.forwardGeocode({
        query: req.body.campground.location,
        limit: 1
    }).send();
    const { campground, deleteImages } = req.body;
    const { id }      = req.params;
    const imgs        = req.files.map(f => ({ url: f.path, filename: f.originalname, cloudId: f.filename }));
    const updateCampground  = await Campground.findByIdAndUpdate(id, {...campground});
    updateCampground.images.push(...imgs);
    campground.geometry = geoData.body.features[0].geometry;
    await updateCampground.save();
    if (deleteImages) {
        for (let filename of deleteImages) {
            await cloudinary.uploader.destroy(filename);
        }
        await updateCampground.updateOne({ $pull: { images: { cloudId: { $in: deleteImages } } } })
    }
    req.flash('success', 'Successfully updated campground!')
    resp.redirect(`/campgrounds/${ id }`);
}

module.exports.deleteCampground = async (req, resp) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted campground!');
    resp.redirect(`/campgrounds`);
}