const mongoose = require('mongoose');
const Campground = require('../model/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
    console.log('Database Connected');
});

const seedDB = async () => {
    await Campground.deleteMany({});
    const temp = new Campground({ title: "purple field" });
    await temp.save();
}