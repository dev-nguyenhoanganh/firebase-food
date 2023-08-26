const _CONF = require('../config')
const nodemailer = require('nodemailer');

module.exports.sendMail = async (subject, content, email) => {
    try {
        const transporter = nodemailer.createTransport({
            host: _CONF.HOST,
            port: _CONF.PORT,
            auth: {
                user: _CONF.GMAIL_EMAIL,
                pass: _CONF.GMAIL_PASSWORD
            },
            secureConnection: 'false',
            tls: {
                ciphers: 'SSLv3'
            }
        });

        const mailOption = {
            from: `HelloWorld <${_CONF.GMAIL_EMAIL}>`,
            to: email,
            subject: subject,
            html: content
        };

        await transporter.sendMail(mailOption);
    } catch (error) {
        console.log(error);
        throw error;
    }
}