const express = require('express')
const userRoute = express.Router();
const User= require('../models/userModel')
// route pour ajouter user
userRoute.post('/add',async (req, res)=>{
    try{const newUser= new User(req.body);
        const result = await newUser.save();
        res.send({user:result, msg:"vous avez ajouté une personne"})
}

catch(err){console.log(err);}})


// selest all users
userRoute.get('/',async (req, res)=>{
    try{
        const result = await User.find();
        res.send({user:result, msg:"all persons "})
}

catch(err){console.log(err);}})
// selectes users by id 

userRoute.get('/:id',async (req, res)=>{
    try{
        const result = await User.findById(req.params.id);
        res.send({user:result, msg:"uder is selected by id "})
}

catch(err){console.log(err);}})
// delete persons
userRoute.delete('/delete/:id',async (req, res)=>{
    try{
        const result = await User.findByIdAndDelete(req.params.id);
        res.send({user:result, msg:"dlete is Done! "})
}
catch(err){console.log(err);}})

// update persons
userRoute.put('/update/:id',async (req, res)=>{
    try{
        const result = await User.findByIdAndUpdate({_id:req.params.id},{$set:req.body},{new:true});
        res.send({user:result, msg:"update person"})
}
catch(err){console.log(err);}})



module.exports = userRoute; 