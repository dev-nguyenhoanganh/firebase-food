const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MstPostCommonSchema = new Schema({
    title: {
        type: String,
    },
    createDate: {
        type: String,
    },
    content: {
        type: String,
    },
    type: {
        type: Number,
        // 1: formNote
        // 2: privacyPolicy
        // 3: communicationMethod
        // 4: homePage
    },
});

module.exports = mongoose.model("MstPostCommon", MstPostCommonSchema);
