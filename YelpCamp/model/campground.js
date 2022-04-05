const mongoose = require('mongoose');
const Review   = require('./review');
const Schema   = mongoose.Schema;


const ImageSchema = new Schema({
    url     : String, 
    cloudId : String,
    filename: String
});

ImageSchema.virtual('thumbnail_355x236').get(function () {
    return this.url.replace('/upload', '/upload/w_355,h_236,c_fill');
});
ImageSchema.virtual('thumbnail_544x363').get(function () {
    return this.url.replace('/upload', '/upload/w_544,h_363,c_fill');
});

const CampgroundSchema = new Schema({
    title      : String,
    price      : Number,
    description: String,
    location   : String,
    author     : {  type: Schema.Types.ObjectId, ref : 'User' },
    images     : [ ImageSchema ],
    reviews    : [
        { type: Schema.Types.ObjectId, ref : 'Review' }
    ]
});

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