const express = require('express');
const port = process.env.PORT || 3000;
const  app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

global.Vocab = require('./api/models/vocabModel');
const routes = require('./api/routes/vocabRoutes');

mongoose.Promise = global.Promise;
mongoose.set('setFindAndModify', false);

mongoose.connect(
    `mongodb+srv://user_token:${ process.env.MONGOPW }@cluster0.xabqf.mongodb.net/Vocab?retryWrites=true&w=majority`,
    {useNewUrlParser: true }
);

app.listen(port);

app.get('/',(req,res) =>{
    res.send('hello from server.js');
});

console.log(`http://localhost${ port}`);
