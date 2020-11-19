const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VocabSchema = new Schema(
    {
        english:{
            type: String,
            require: 'English word required'
        },
        german: {
            type: String,
            require: 'German word required'
        }
    },
    {
        collection: 'vocab'
    }
);

module.exports = mongoose.model('Vocab',VocabSchema);
