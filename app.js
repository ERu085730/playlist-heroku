const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const listRoutes = require('./routes/listRoute')
const PORT = process.env.PORT || 5000
const cool = require('cool-ascii-faces');

const { render } = require('ejs');

// express app 
const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://test:1234@playlist.vh6ku.mongodb.net/PlayList?retryWrites=true&w=majority';

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(PORT))
    .catch((err) => console.log(err));

// register view engine
app.set('view engine','ejs')


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));

app.get('/', (req, res) =>{
    res.redirect('/lists');
});

app.get('/cool', (req, res) =>{
    res.send(cool());
});

app.use('/lists', listRoutes);

app.use((req, res) =>{
    res.status(404).render('404', {title : "404"});
});