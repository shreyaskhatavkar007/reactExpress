const mongoose = require('mongoose');
const {Schema} = mongoose;

const gameSchema = new Schema({
    gameName: String,
    mid: String,
    cid: String
})

mongoose.model('Games', gameSchema);