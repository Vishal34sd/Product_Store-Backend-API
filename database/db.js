const mongoose = require("mongoose");

const connectToDB = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://dubeyji8080:dubey123@cluster0.uai8kho.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Database connected successfully ");
    }catch(e){
       
        console.error("Database cannot connect due to some issue" , e);
    };
}

module.exports = connectToDB ;