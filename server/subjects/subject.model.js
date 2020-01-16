const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, required: true },
    classSubjects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ClassSubject'
    }]
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Subject', schema);