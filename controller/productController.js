
const Product = require('../model/product');

const getAllProduct = async (req , res)=>{
    try{
    const allData =  await Product.find({});
    if(allData?.length > 0){
        res.status(400).json({
            success : true ,
            message : "All records found successfully ",
            data : allData
        });
    }
    else{
        res.status(201).json({
            success : false ,
            message : "No product is found "
        });
    }
    }
    catch(e){
        res.status(500).json({
            success : false , 
            message : "Some technical error has been occured "
        });
    }
}

const getProductByID = async(req , res )=>{
    try{
        const fetchID = req.params.id ;
        const fetchData = await Product.findById(fetchID); //this id is created by mongodb only not productID
        if(fetchData){
            res.status(400).json({
                success: true,
                message : "Product found successfully",
                data : fetchData

            });
        }
        else{
            res.status(201).json({
                success : false ,
                message : "No product found by ID "
            });
        }
    }
    catch(e){
        console.error(e);
        res.status(500).json({
            success: false,
            message: "something went wrong"
        });
    }
}

const addProduct = async (req , res )=>{
    try{
        const inputData = req.body ;
        const addInputData = await Product.create(inputData);
        if(addInputData){
            res.status(201).json({
                success: true,
                message: "Product added successfully",
                data: addInputData
            });
        }
        else{
            res.status(401).json({
                success : false ,
                message : "Product could not be added "
            });
        }
    }
    catch(e){
        console.error(e);
        res.status(500).json({
            success : false ,
            message : "Something went wrong "
        });
    }
}

module.exports = {getAllProduct, getProductByID, addProduct};