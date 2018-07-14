var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var headlineSchema = new Schema({
    _headlingId: {
        type: Schema.Types.ObjectId,
        ref: "Headline"
    },
    date: String,
    noteText: String
    
});

var Headline = mongoose.model('Note', headlineSchema);

module.export = Note;