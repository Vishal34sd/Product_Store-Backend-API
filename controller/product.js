
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

module.exports = {getAllProduct};