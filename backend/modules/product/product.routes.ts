
const express= require('express');
const app = express();

const productRoute= express.Router();

let Product = require('./model/Product');


//Add product
productRoute.route('/add-product').post((req:any, res:any, next:any) => {
    Product.create(req.body, (error:any, data:any) => {
        if(error){
            return next(error);

        }else{
            res.json(data);
        }
    })
})

//Get all book

productRoute.route('/').get((req:any, res:any , next:any) => {
    Product.find((error:any, data:any) =>{
        if(error){
            return next(error);

        }else{
            res.json(data);
        }
    })
})

//Get book

productRoute.route('/read-product/:id').get((req:any, res:any,next:any) => {
    Product.findById(req.params.id, (error:any, data:any) =>{
        if(error){
            return next(error);

        }else{
            res.json(data);
        }
    })
})

//Update Product

productRoute.route('/update-product/:id').put((req:any, res:any,next:any) => {
    Product.findByIdAndUpdate(req.params.id, {
        $set: req.body
    },(error:any,data:any) => {
        if(error){
            return next(error);
        

        }else{
            res.json(data);
            console.log('Product Updated');
        }

    }
    )
})


//Delete Product

productRoute.route('/delete-product/:id').delete((req:any, res:any, next:any) => {
    Product.findByIdAndRemove(req.params.id, (error:any, data:any) =>{
        if(error){
            return next(error);

        }else{
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = productRoute;