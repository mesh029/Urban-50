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
    participants: {
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
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Event", EventSchema);