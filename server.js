const express = require("express");
require("dotenv").config();
const connectToDB  = require("./database/db");

const PORT = process.env.PORT || 8080 ;




const app = express();
connectToDB();


app.use(express.json());

app.listen(PORT , ()=>{
    console.log(`Server is running on ${PORT}`);
})
