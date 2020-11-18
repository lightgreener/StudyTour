const fs= require('fs');

// Sync
const fileData = fs.readFileSync('demo.txt','utf-8');
console.log(fileData);

//Async
fs.readFile('demo.txt','utf-8',function (error,data) {
    if(error){
        return console.error(error);
    }
    console.log(data);
});     // same above ,
console.log(" see this line first");
