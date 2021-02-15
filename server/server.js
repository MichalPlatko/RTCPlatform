require("dotenv").config();
const express=require("express");
const app=express();
const port=process.env.BACKEND_PORT || 3000;



//app.use()

app.listen(port,()=>{
    console.log(`Server listening at port ${port}`);
})
