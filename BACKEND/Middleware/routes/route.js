const express = require('express')
const router = express.Router()

// Middlewares
const auth = function(req, res, next){
    console.log("I am inside Authorization Middleware");
    
    // Put this inside the middleware
    req.user = { userId: 1, role: "student" };

    if(req.user){
        next();   // Now next() is valid
    }
    else{
        res.json({
            success: false,
            message: "Not a Valid user",
        });
    }
}

const isstudent = function(req, res, next){
    console.log("I am inside the student middleware");
    if(req.user.role === "student"){
        next();
    }
    else{
        res.json({
            success: false,
            message: "Access denied this route is only for students"
        });
    }
}

const isAdmin = function(req, res, next){
    console.log("I am inside the admin middleware");
    if(req.user.role === "admin"){
        next();
    }
    else{
        res.json({
            success: false,
            message: "Access denied this route is only for admins"
        });
    }
}

// routes
router.get("/student", auth, isstudent, (req,res)=>{
    console.log("I am inside student route");
    res.send("Students specific page");
})

router.get("/admin", auth, isAdmin, (req,res)=>{
    console.log("I am inside admin route");
    res.send("Admin specific page");
})

module.exports = router;
