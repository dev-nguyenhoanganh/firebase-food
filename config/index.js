const config = Object.freeze({
    // secret key API
    SECRET: "SECRET_TRUONGVANLAM",
    SECRET_REFRESH: "SECRET_REFRESH_TRUONGVANLAM",

    // expiresIn token
    tokenLife: 600,
    refreshTokenLife: 120,
    refreshTokens: {},

    // gmail
    HOST: "smtp.gmail.com",
    PORT: "587",
    GMAIL_EMAIL: "truongvanlam176@gmail.com",
    GMAIL_PASSWORD: "stswevdyyvmquuii",
    GENERATE: {
        code: "",
    },

    /***CONST***/
    NOT_FOUND: 0,
    FORM_NOTE: 1,
    PRIVACY_POLICY: 2,
    COMMUNICATION_METHOD: 3,
    HOME_PAGE: 4,
});

module.exports = config;
