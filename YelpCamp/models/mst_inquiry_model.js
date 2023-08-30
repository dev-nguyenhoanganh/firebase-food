const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MstInquirySchema = new Schema({
    inquiryItem: {
        type: String,
        required: true,
    },
    requestContent: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    furigana: {
        type: String,
        required: true,
    },
    emailAddress: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    telephoneNumber: {
        type: String,
        required: true,
    },
    preferredContact: {
        type: String,
        required: true,
    },
    contentOfInquiry: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("MstInquiry", MstInquirySchema);
