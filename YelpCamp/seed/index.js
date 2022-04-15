const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
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

const sample = array => array[Math.floor(Math.random() * array.length)]

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '6233488b7382b2d52fbd40f9',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(places)} ${sample(descriptors)}`,
            price: price,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum saepe iure nemo similique illo perspiciatis rem, quas reiciendis corporis eveniet debitis itaque iste modi ea earum eaque atque porro totam!',
            images: [
              {
                url: 'https://res.cloudinary.com/disdzwovt/image/upload/v1649165659/YelpCamp/kw1iybragjtihe5cqnwv.jpg',
                filename: 'Landscape_01.jpg',
                cloudId: 'YelpCamp/kw1iybragjtihe5cqnwv'
              },
              {
                url: 'https://res.cloudinary.com/disdzwovt/image/upload/v1649078749/YelpCamp/xrzeo9xzaszejpmds2ub.jpg',
                filename: 'Landscape_02.jpg',
                cloudId: 'YelpCamp/xrzeo9xzaszejpmds2ub'
              }
            ],
            geometry: {
              type: "Point",
              coordinates: [
                cities[random1000].longitude,
                cities[random1000].latitude]
            }
        });
        await camp.save();
    }
}

seedDB();