const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Product = require('./model/product');

const categories = ['fruit', 'vagetable', 'dairy'];

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
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category });
        resp.render('products/index', { products, category, categories });
    } else {
        const products = await Product.find({});
        resp.render('products/index', { products, category: 'All', categories });
    }
});
app.get('/products/new', (req, resp) => {
    resp.render('products/new', { categories });
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
    resp.render('products/edit', { product, categories });
})
app.put('/products/:id', async (req, resp) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new: true});
    resp.redirect(`/products/${product.id}`)
})
app.delete('/products/:id', async (req, resp) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    resp.redirect('/products');
})

app.listen(3000, () => {
    console.log('App is listening on port 3000');
})
