const mongoose = require('mongoose'),
Cake = mongoose.model('Cake')
const cakes = require('../controllers/cakes.js');
module.exports = function(app){
    app.post('/cakes',cakes.addCake);
    app.get('/cakes',cakes.showCakes);
    app.get('/cakes/:id',cakes.showCake);
    app.post('/cakes/:id',cakes.addRating)
}
