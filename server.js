// Dependencies
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const app = express()
const db = mongoose.connection
require('dotenv').config()
const Winner = require('./models/winner.js');


// PORT
const PORT = process.env.PORT || 3333
// Database
const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
)
// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI))
db.on('disconnected', () => console.log('mongo disconnected'))
// middleware
// use the public folder
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false}))
app.use(methodOverride('_method'))
// app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', require('ejs').renderFile);
// routes
app.get('/', (req, res) => {
  res.render('index.html');
});

app.get('/lose', (req, res) => {
  res.render('lose.ejs');
});

app.get('/halloffame/win', (req, res) => {
  res.render('win.ejs')
});

app.get('/halloffame', (req, res) => {
  Winner.find({}, (error, allWinner) => {
    res.render('fame.ejs', {
      winner: allWinner
    });
  })
});

// app.post('/halloffame', (req, res) => {
//   Winner.create(req.body, (error, createdWinner) => {
//     res.redirect('/halloffame')
//   })
// })

app.listen(PORT, () => {
  console.log('Listening on port:', PORT)
})
