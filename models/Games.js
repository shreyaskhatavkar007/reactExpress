const mongoose = require('mongoose');
const {Schema} = mongoose;

const gameSchema = new Schema({
    games: Object
})

module.exports = mongoose.model('Games', gameSchema);