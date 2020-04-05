const
    fs = require('fs'),
    stringContants = require('./stringContants'),
    GOOGLE = stringContants.GOOGLE,

    rawdata = fs.readFileSync(stringContants.PATHS.CONFIG_FILE),
    configs = JSON.parse(rawdata),

    googleData = configs[GOOGLE.BASE_NAME],

    GOOGLE_AUTH = {
        CLIENT_ID: googleData[GOOGLE.CLIENT_ID],
        CLIENT_SECRET: googleData[GOOGLE.CLIENT_SECRET],
        CALLBACK_URL: googleData[GOOGLE.CLIENT_SECRET]
    }

module.exports = {
    GOOGLE_AUTH
}
