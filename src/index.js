const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const { application } = require('express');

const Product = require('./model/product');
const Farm = require('./model/farm');
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

// Farm route
app.get('/farms', async (req, resp) => {
    const farms = await Farm.find({});
    resp.render('farms/index', { farms })
})
app.get('/farms/new', (req, resp) => {
    resp.render('farms/new');
})
app.get('/farms/:id/products/new', (req, resp) => {
    const { id } = req.params;
    resp.render('products/new', { categories, id });
});
app.post('/farms/:id/products', async (req, resp) => {
    const { id, name, price, category } = req.body;
    const farm = await Farm.findById({ id });
    const product = new Product({ name, price, category });
    farm.products.push(product);
    product.farm = farm;
    await farm.save();
    await product.save();
    resp.redirect(`farms/${ id }`);
});
app.get('/farms/:id', async (req, resp) => {
    const farm = await Farm.findById(req.params.id).populate('product');
    resp.render('farms/show', { farm });
});
app.post('/farms', async (req, resp) => {
    const farm = new Farm(req.body);
    await farm.save();
    resp.redirect('farms');
})


// Product route
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
