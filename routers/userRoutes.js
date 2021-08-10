const User = require('../models/userModels');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



router.post("/", async(req,res)=>{

    try{
        

        const {email,password} = req.body;
       

        
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        const newUser = new User({
         
            email, passwordHash
    
        });

        const savedUser = await newUser.save();
       
        
        
    
       
        

    }catch(err){
       console.error(err);
    }
});


router.post("/login", async(req,res)=>{
   
    try{
    
        const {email,password} = req.body;
  
        //validate
        if(!email || !password){
          return res.status(400).json({errorMessage: "please enter all required fields"});
         }
  
         const existingUser = await User.findOne({ email });
         if(!existingUser){
          return res.status(401).json({errorMessage: "wrong email and password"});
         } 
  
         const passwordCorrect = await bcrypt.compare(password, existingUser.passwordHash);
         if(!passwordCorrect){
          return res.status(401).json({errorMessage: "wrong email and password"});
         }else{
            
         }
         
         const token = jwt.sign({
          user: existingUser._id
      },process.env.JWT_SECRET);
  
     // console.log(token);
     //console.log(passwordHash);
      
     //send the token in a HTTP-only cookie
     res.cookie("token",token, {
        httpOnly: true
     }).send();
  
     
  
  
  
     }catch(err){
          console.error(err);
          res.status(500).send();
     }

});



router.get("/logout", (req,res) => {
 
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0)
     }).send();

});


router.get("/loggedIn", (req, res) => {
  
    var cookie = req.cookies.token;
    if (!cookie) {
        return res.json(false);
        
    }else{
        
        return res.json(true);
    }
 
});

router.get("/getcookie", (req,res)=>{
  
    const cookie = req.cookies;
    console.log(cookie);
    res.json(cookie);
     
});


router.get("/setcookie", (req,res)=>{
  
    res.cookie('username', 'hiruna');
    res.send('setcookie sucsess');
     
});


module.exports = router;

