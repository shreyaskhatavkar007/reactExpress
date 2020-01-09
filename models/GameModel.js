const mongoose = require('mongoose');
const {Schema} = mongoose;

const gameSchema = new Schema({
    allGames: Array
})

mongoose.model('gamemodel', gameSchema);