var express = require('express');
var app = express();
const mongoose = require('mongoose'),
Cake = mongoose.model('Cake')
Comment = mongoose.model('Comment')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
module.exports = {
    addCake : function(req,res){
        console.log("Req body in cakes.js:",req.body);
        var cake = new Cake(req.body);
        cake.save(function(err){
            if(err){
                console.log("failure cake")
                res.json({message:err});
            }else{
                console.log("successful cake creation!")
                res.json({message: "Added new cake:",cake:cake})
            }
        })
    },
    showCakes : function(req,res){
        Cake.find({},function(err,cakes){
            if(err){
                console.log("couldn't retrieve cakes")
            }
            else{
                console.log("found cakes!");
                res.json({cakes:cakes})
            }
        })
    },
    showCake : function(req,res){
        Cake.findOne({_id:req.params.id}, function(err, cake){
            if(err){
                console.log("can't find cake")
            }else{
                console.log("found ONE cake");
                res.json({cake:cake})
            }
        })
    },
    addRating : function(req,res){
        console.log("Req.body in cakes.js: ",req.body);
        console.log(req.params)
        var comment = new Comment(req.body);
        comment.save(function(err){
            if(err){
                console.log("rating was not created");
            }else{
                Cake.findOneAndUpdate({_id:req.params.id},{$push: {comments:comment}},function(err){
                    if(err){
                        console.log("rating not added to cake");
                    }else{
                        console.log("success adding rating to cake");
                    }
                })
                console.log("comment added")
            }
        })
    }
    
}