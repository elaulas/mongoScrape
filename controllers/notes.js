// notes controller

var Note = require('../models/Note');
var makeDate = require('../scripts/data');

module.exports = {
    get: (data, cb) => {
        Note.find({
            _headLineId: data._id
        }, cb);
    },
    save: (data, cb) => {
        var newNote = {
        _headlineID: data._id,
        date: makeDate(),
        noteText: data.noteText
    };

    Note.create(newNote, (err, doc) {
        if (err) {
            console.log(err);
        } else {
            console.log(doc);
            cb(doc);
        }
    });

    },
    delete: (data, cb) => {
        Note.remove({
            _id: data._id
        }, cb);
    }
};