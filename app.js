if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

require('./utils/connectDatabase');
const express          = require('express');
const path             = require('path');
const ejsMate          = require('ejs-mate');
const bodyParser = require('body-parser');

const route           = require('./routes');

const app = express();

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

route(app)

app.listen(process.env.PORT, () => {
    console.log('Serving on port 3000');
})
