const http=require('http');  // node standard library

http.createServer((req,res) => {
    // this callback function evrytime a request hits the server
    console.log('there was request');

}).listen(1337);   // PORT for node

  
