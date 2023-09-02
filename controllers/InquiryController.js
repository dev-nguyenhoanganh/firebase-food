const inquiryModel = require("../models/inquiry_model");

module.exports.createInquiry = async (req, res) => {
    const data = req.body;
    try {
        await inquiryModel.create({ ...data });
        return res.status(200).json({
            status: 200,
            message: "create successfully!",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong!" });
    }
};

module.exports.updateInquiry = async (req, res) => {
    const id = req.body._id;
    const data = req.body;
    try {
        await inquiryModel.findByIdAndUpdate(id, { ...data });
        return res.status(200).json({
            status: 200,
            message: "update successfully!",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong!" });
    }
};

module.exports.getInquiry = async (req, res) => {
    const { id } = req.params;
    try {
        const inquiry = await inquiryModel.findById(id);
        return res.status(200).json({
            status: 200,
            inquiry,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong!" });
    }
};

module.exports.getInquiries = async (req, res) => {
    try {
        const inquiries = await inquiryModel.find({});
        return res.status(200).json({
            status: 200,
            inquiries,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong!" });
    }
};
