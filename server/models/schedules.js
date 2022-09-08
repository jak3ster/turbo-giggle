const { Schema ,model } = require('mongoose');

const schedulesSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    days: {
        type: Number,
        required: true
    },
    schedule_start: {
        type: Date,
        required: true
    },
    schedule_end: {
        type: Date,
        required: true
    },
    doctor_id: {
        type: String,
        required: true
    }
});

const schedules = model('schedules', schedulesSchema);

module.exports = schedules;