const express = require('express');
const ejs = require('ejs');
const colors = require('colors');
const _ = require('underscore');
const axios = require('axios')

const server = express();
server.use(express.static('public'));     // this is for css , so can be used on other ejs file
server.set('view-engine',ejs);  //see docs

const PORT = 1337;

server.get('/',(req,res) => {
    console.log('get/');
    //res.send('welcome to home page')

    const brothers = 'Liz Max Bindo'.split(' ');
    const randomBrother = _(brothers).sample();

    res.render('home.ejs', {'brother': randomBrother, lucky: _.random(40)})   // render to page --- home.ejs  并且 还有pass randomBrother to home.ejs ,所以用大括号。在传一个lucky的值，
})

// Dynamic URLs
server.get('/hello/:name', (req, res) => {
    res.send( `hello ${ req.params.name}`)    // params[:name]
})

// calculator
server.get('/calc/:x/:y/:operator' , ( req, res) =>{
    let x = req.params.x;
    let y = req.params.y;
    let answer;
    if ( req.params.operator === '+') {
        answer = Number(x) + Number(y);
    }else if ( req.params.operator === '-') {
        answer = Number(x) - Number(y)      //这里不能用return
    }
    // res.send(`${ x} ${req.params.operator} ${ y} is ${ answer }`)
    res.render('calc.ejs', { answer: answer});
})

// get Json file
server.get('/info.json', (req ,res) => {
    res.json({     // 可以直接返回json文件
        name: 'liz',
        age: 23,
        gender: 'female',
        luckyNumber: _.random(40)
    })
})

// get API
server.get('/trivia', (req, res) => {
    axios.get('http://numberapi.com/random/trivia').then((response) =>{
        res.render('trivia.ejs', { fact: response.data })
    })
})

// make a form to
server.get('/ask',(req, res) =>{
    res.render('ask.ejs')
})
server.get('/answer', (req, res)=>{
    res.render('answer.ejs', { question: req.query.tiwen, answer: 'No comment'})  // here must use req.query
})



server.listen(PORT,()=> {
    console.log(`Server listening on port ${ PORT }`);
})

// console.log('hello world'.repeat(16).trap.rainbow);
// console.log('hello world'.repeat(16).zalgo.rainbow);
