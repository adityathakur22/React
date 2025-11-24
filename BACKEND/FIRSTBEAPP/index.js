// Including express module and initailizing an app
const express=require('express');
const app=express();

// Variable that stores the port Number
const port=3000;


app.get('/',(req,res)=>{
    console.log("Get Request receive hui h");
})
// Start your app or server
app.listen(port,()=>{
    console.log("App has been started");
});
