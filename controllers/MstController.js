const mstContactModel = require("../models/mst_contact_model");
const mstPostCommonModel = require("../models/mst_post_common_model");
const mstInquiryModel = require("../models/mst_inquiry_model");
const _CONF = require("../config");

module.exports.getMstInfo = async (req, res) => {
    try {
        const contact = await mstContactModel.findOne();

        const inquiryForm = await mstInquiryModel.findOne({});

        const postCommon = await mstPostCommonModel.find();
        const formNote = postCommon.find(
            (element) => element.type === _CONF.FORM_NOTE
        );
        const privacyPolicy = postCommon.find(
            (element) => element.type === _CONF.PRIVACY_POLICY
        );
        const communicationMethod = postCommon.find(
            (element) => element.type === _CONF.COMMUNICATION_METHOD
        );

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
                contentOfInquiry: JSON.parse(inquiryForm.contentOfInquiry),
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
            communicationMethod: {
                title: communicationMethod.title,
                createDate: communicationMethod.createDate,
                content: JSON.parse(communicationMethod.content),
            },
        };
        return res.status(200).json({
            status: 200,
            data_masters,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong!" });
    }
};

module.exports.getDataHomePage = async (req, res) => {
    try {
        const homePage = await mstPostCommonModel.findOne({
            type: _CONF.HOME_PAGE,
        });

        const dataHomePage = {
            heading: homePage.title,
            section: JSON.parse(homePage.content),
        };
        return res.status(200).json({
            status: 200,
            dataHomePage,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong!" });
    }
};
