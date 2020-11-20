const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const sourceURL = 'https://www.madcoversite.com/dmd-alphabetical.html';

// 常规写法，
// axios.get(sourceURL).then((response) =>{
//     console.log(response.data);
// })

// 这里是promise之后的写法， async 的写法
const start = async() =>{
    const response = await axios.get(sourceURL);
    const html = response.data ;

    const rows = cheerio('table table tr:nth-child(n+2)',html)
    // console.log($row.length);
    const entries = [];

    rows.each(function (){  // need this so we can't use an arrow function
        const cells = cheerio('td', this);
        const entry = {
            sound:cells.eq(0).text(),  // jquery way to get info from cells
            description:cells.eq(1).text() ,     // .eq(0)  就是第一个索引
            sourece:cells.eq(2).text(),
            title:cells.eq(3).text()
        }

        entries.push(entry);
    })

    fs.writeFile('./martin.json',JSON.stringify(entries,null,2), ()=>{
        console.log(`martin.jso saved: ${ entries.length } entries`);
    })

}

start();
