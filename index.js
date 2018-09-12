const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(function (req, res, next) {
    console.log(process.env.NODE_ENV);
    next()
  })

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
//require('./routes/billingRoutes')(app);
//require('./routes/surveyRoutes')(app);

//require('./routes/badAuthRoute')(app);

console.log('starting: ', process.env.NODE_ENV);
console.log('should be prod now !!!');
app.use(express.static('client/build'));

const path = require('path');
app.get('*', (req, res) => {
    console.log('hit');
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
})
const PORT = process.env.PORT || 5000;

app.listen(PORT);