const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({

    eventName: {
        type: String,
        required: true,
        unique: true,
    },
    eventDesc: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: false,

    },
    venue: {
        type: String,
        required: false,
    },
    time: {
        type: String,
        required: false,
    },
    format:{   
        type: String,
        required: false,
    },
    categories: {
        type: String,
        required: false,
    },
    organisers: {
        type: String,
        required: false,
    },
    sponsors: {
        type: String,
        required: false,
    },
    registrationLink: {
        type: String,
        required: false,
    },
    date: {
        type: String,
        required: false,
    },
    prizes:{
        type: String,
        required: false,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Event", EventSchema);