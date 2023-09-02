const _CONF = require("../config");
const nodemailer = require("nodemailer");
const mstPostCommonModel = require("../models/mst_post_common_model");

module.exports.sendMail = async (subject, content, email) => {
    try {
        const transporter = nodemailer.createTransport({
            host: _CONF.HOST,
            port: _CONF.PORT,
            auth: {
                user: _CONF.GMAIL_EMAIL,
                pass: _CONF.GMAIL_PASSWORD,
            },
            secureConnection: "false",
            tls: {
                ciphers: "SSLv3",
            },
        });

        const mailOption = {
            from: `HelloWorld <${_CONF.GMAIL_EMAIL}>`,
            to: email,
            subject: subject,
            html: content,
        };

        await transporter.sendMail(mailOption);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports.getNotFound = async (req, res) => {
    try {
        const errorNotFound = await mstPostCommonModel.findOne({type: _CONF.NOT_FOUND});
        return res.status(404).json({
            title: errorNotFound.title,
            createDate: errorNotFound.createDate,
            content: JSON.parse(errorNotFound.content)
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong!" });
    }
}
