const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Product = require('./model/product');

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('CONNECTION OPEN :v');
    })
    .catch((err) => {
        console.log('Connection Error!');
        console.log(err);
    });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.get('/products', async (req, resp) => {
    const products = await Product.find({});
    resp.render('products/index', { products });
});
app.get('/products/new', (req, resp) => {
    resp.render('products/new');
})
app.post('/products', async (req, resp) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    resp.redirect(`/products/${newProduct.id}`);
}) 
app.get('/products/:id', async (req, resp) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    resp.render('products/show', { product });
})
app.get('/products/:id/edit', async (req, resp) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    resp.render('products/edit', { product });
})
app.put('/products/:id', async (req, resp) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new: true});
    resp.redirect(`/products/${product.id}`)
})


app.listen(3000, () => {
    console.log('App is listening on port 3000');
})
