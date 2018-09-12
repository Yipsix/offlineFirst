const passport = require('passport');
const GoogleStrayegy = require('passport-google-oauth20').Strategy;
const BnetStrategy = require('passport-bnet').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

const options = {};

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrayegy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({ googleId: profile.id });

            if (existingUser) {
                done(null, existingUser);
            } else {
                const user = await new User({ googleId: profile.id, displayName: profile.displayName }).save();
                done(null, user);
            }


        }
    )
);

passport.use(new BnetStrategy({
    clientID: "xft3ss96zcu7f2ph38ds56mq4wh9qvj7",
    clientSecret: "mBPARvJKbVMfyz7FYh9xSDF8usMuSqVN",
    callbackURL: "https://mighty-hollows-15616.herokuapp.com/auth/bnet/callback"
}, async (accessToken, refreshToken, profile, done) => {
    console.log("logged bnet auth")
    console.log(profile)
    return done(null, profile);
}));

passport.use(new LocalStrategy(
    function(username, password, done) {
      return username;
    }
  ));