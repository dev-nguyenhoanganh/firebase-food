const mstContactModel = require('../models/mst_contact_model');
const mstPostCommonModel = require('../models/mst_post_common_model');
const mstInquiryModel = require('../models/mst_inquiry_model');

module.exports.getMstInfo = async (req, res) => {
    try {
        const contact = await mstContactModel.findOne();

        const inquiryForm = await mstInquiryModel.findOne({});

        const postCommon = await mstPostCommonModel.find();
        const formNote = postCommon.find(element => element.type === 1);
        const privacyPolicy = postCommon.find(element => element.type === 2);
        const comunicationMethod = postCommon.find(element => element.type === 3);

        const data_masters = {
            contactInfo: {
                title: contact.title,
                createDate: contact.createDate,
                list: JSON.parse(contact.list),
                block: JSON.parse(contact.block),
            },
            form: {
                inquiryItem: JSON.parse(inquiryForm.inquiryItem),
                requestContent: JSON.parse(inquiryForm.requestContent),
                name: JSON.parse(inquiryForm.name),
                furigana: JSON.parse(inquiryForm.furigana),
                emailAddress: JSON.parse(inquiryForm.emailAddress),
                address: JSON.parse(inquiryForm.address),
                telephoneNumber: JSON.parse(inquiryForm.telephoneNumber),
                preferredContact: JSON.parse(inquiryForm.preferredContact),
                contentOfInquiry: JSON.parse(inquiryForm.contentOfInquiry)
            },
            formNoteInfo: {
                title: formNote.title,
                createDate: formNote.createDate,
                content: JSON.parse(formNote.content),
            },
            privacyPolicy: {
                title: privacyPolicy.title,
                createDate: privacyPolicy.createDate,
                content: JSON.parse(privacyPolicy.content),
            },
            comunicationMethod: {
                title: comunicationMethod.title,
                createDate: comunicationMethod.createDate,
                content: JSON.parse(comunicationMethod.content),
            },
        };
        return res.status(200).json({
            status: 200,
            data_masters
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong!"})
    }
}