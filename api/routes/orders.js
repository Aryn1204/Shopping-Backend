const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"This is the orders get"
    });
});

router.post('/',(req,res,next)=>{

    const order ={
        name: req.body.name,
        orderId: req.body.orderId
    };

    res.status(201).json({
        message:"This is the orders post",
        orderId : order
    });
});

router.get('/:orderId',(req,res,next)=>{
    const id=req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message:"This is the special orderId get",
            id:id
        });
    }
    else{
        res.status.json({
            message:"This is the normal orderId get",
            id:id
        });
    }
});

router.patch('/:productId',(req,res,next)=>{
    const id=req.params.productId;
    res.status(200).json({
        message:"Order Patched"
    });
});

router.delete('/:productId',(req,res,next)=>{
    const id=req.params.productId;
    res.status(200).json({
        message:"Order Deleted"
    });
});

module.exports = router;