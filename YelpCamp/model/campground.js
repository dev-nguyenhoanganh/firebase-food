const mongoose = require('mongoose');
const Review   = require('./review');
const Schema   = mongoose.Schema;


const ImageSchema = new Schema({
    url     : String, 
    cloudId : String,
    filename: String
});

ImageSchema.virtual('thumbnail_200x200').get(function () {
    return this.url.replace('/upload', '/upload/w_400,h_400,c_fill');
});
ImageSchema.virtual('thumbnail_355x236').get(function () {
    return this.url.replace('/upload', '/upload/w_710,h_472,c_fill');
});
ImageSchema.virtual('thumbnail_544x363').get(function () {
    return this.url.replace('/upload', '/upload/w_1088,h_726,c_fill');
});

const virtualJSON = { toJSON: { virtuals: true } };

const CampgroundSchema = new Schema({
    title      : String,
    price      : Number,
    description: String,
    location   : String,
    geometry   : {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    author     : {  type: Schema.Types.ObjectId, ref : 'User' },
    images     : [ ImageSchema ],
    reviews    : [
        { type: Schema.Types.ObjectId, ref : 'Review' }
    ]
}, virtualJSON);

CampgroundSchema.virtual('properties.popupMarkup').get(function () {
    return `<h3><a href="/campgrounds/${this._id}">${this.title}</a></h3><hr><p>${this.location}</p>`;
})

CampgroundSchema.post('findOneAndDelete', async function(doc) {
    if (doc) {
        await Review.deleteMany({
            _id: {
                $in: doc.reviews
            }
        })
    }
})

module.exports = mongoose.model('Campground', CampgroundSchema);