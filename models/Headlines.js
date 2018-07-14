var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var headlineSchema = new Schema({
    headling: {
        type: String,
        required: true,
        unique: true
    },
    summary: {
        type: String,
        required: true
    },
    date: String,
    save: {
        type: Boolean,
        default: false
    }
});

var Headline = mongoose.model('Headline', headlineSchema);

module.export = Headline;