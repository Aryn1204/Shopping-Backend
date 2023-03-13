const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();
const Product = require('D:/Shopping Backend/api/routes/schemas/productSchema');

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"This is the products get"
    });
});

router.post('/',(req,res,next)=>{

    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price:req.body.price
    });
   
    //Saving in database
    product.save().then(
        result =>{
            console.log(result);
        }).catch(
            err =>{console.log(err)}
        );
        
    //Result of POST request
    res.status(200).json({
        message:"This is the products post",
        createdProduct: product
    });

});

router.get('/:productId',(req,res,next)=>{
    const id=req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message:"This is the special productId get",
            id:id
        });
    }
    else{
        res.status.json({
            message:"This is the normal productId get",
            id:id
        });
    }
});

router.patch('/:productId',(req,res,next)=>{
    const id=req.params.productId;
    res.status(200).json({
        message:"Product Patched"
    });
});

router.delete('/:productId',(req,res,next)=>{
    const id=req.params.productId;
    res.status(200).json({
        message:"Product Deleted"
    });
});

module.exports = router;