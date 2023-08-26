const mongoose              = require('mongoose');
const Schema                = mongoose.Schema;

const InquirySchema = new Schema({
    inquiryItem: {
        type    : Number,
        required: true,
    },
    requestContent: {
        type    : String,
        required: true,
    },
    name: {
        type    : String,
        required: true,
    },
    furigana: {
        type    : String,
        required: false,
    },
    emailAddress: {
        type    : String,
        required: true,
    },
    address: {
        type: String,
        required: false,
    },
    telephoneNumber: {
        type    : String,
        required: true,
    },
    preferredContact: {
        type    : Number,
        required: false,
    },
    contentOfInquiry: {
        type: String,
        required: false,
    }
})

module.exports = mongoose.model('Inquiry', InquirySchema);