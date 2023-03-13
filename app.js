const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({exteded:false}));
mongoose.connect("mongodb+srv://singharyn2002:"+process.env.MONGO_ATLAS_PW+"@nodeshop.hwos22q.mongodb.net/?retryWrites=true&w=majority");

app.use('/products',productRoutes);
app.use('/orders',orderRoutes);

app.use((req,res,next)=>{
    const error= new Error('Not Found');
    error.status=404;
    next(error);
});

app.use((req,res,error,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message 
        }
    });
});

module.exports = app; 