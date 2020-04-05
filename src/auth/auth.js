const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
    GOOGLE_AUTH = require('../utils/configurations').GOOGLE_AUTH;

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
    passport.use(new GoogleStrategy({
        clientID: GOOGLE_AUTH.CLIENT_ID,
        clientSecret: GOOGLE_AUTH.CLIENT_SECRET,
        callbackURL: GOOGLE_AUTH.CALLBACK_URL
    },
        (token, refreshToken, profile, done) => {
            return done(null, {
                profile: profile,
                token: token
            });
        }));
};
