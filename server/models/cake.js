var mongoose = require('mongoose')

module.exports = function(app){
    var CommentSchema = new mongoose.Schema({
        comment: {type:String, required: true},
        rating: {type:Number, min:1, max:5}
    })
    var CakeSchema = new mongoose.Schema({
        baker: {type:String, required:true},
        imageUrl : {type: String, required:true},
        avgRating : {type: Number},
        comments: [CommentSchema]
    },{timestamps:true})

    mongoose.model('Comment',CommentSchema);
    var Comment  = mongoose.model('Comment');
    mongoose.model('Cake', CakeSchema);
    var Cake = mongoose.model('Cake')

}