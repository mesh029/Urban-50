const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({

    playerName: {
        type: String,
        required: true,
        unique: true,
    },
    nickName: {
        type: String,
        required: true,
    },
    federation: {
        type: String,
        required: false,
    },
    nationality: {
        type: String,
        required: false,
    },
    fideRating: {
        type: String,
        required: false,
    },
    peakRating: {
        type: String,
        required: false,
    },
    club: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    playerImg:{
        type: String,
        required: false,
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Player", PlayerSchema);