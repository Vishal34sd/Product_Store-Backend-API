const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productID : {
        type : Number ,
        required : true , 
        trim : true 
    },
    productName:{
            type: String ,
            required : true , 
            trim:true
        },
    qauntity : {
        type: Number , 
        required : true , 
        default : 0
    },
    productBrand : {
        type : String , 
        required : true ,
        trim : true
    }

    
});


module.exports = mongoose.model("Product",productSchema);
