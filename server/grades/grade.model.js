const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    dateAdded: { type: Date, default: Date.now, required: true },
    dateModified: { type: Date, default: Date.now, required: true },
    score: { type: Number, default: 0 },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
    },
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Grade', schema);