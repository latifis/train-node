const http = require('http');
const fs = require('fs');
// const { hostname } = require('os');
const moment = require('moment');
const port = 3000;
const christmas = "2022-12-25";
console.log(moment(christmas).format('LL'))

const  server = http.createServer((req,res)=>{
    //if text
    res.setHeader('Content-Type', 'text/html');
    // res.write('Welcome to ckmobile');


    //routing
    let route = "./views/";

    switch (req.url) {
        case '/':
            console.log('Hello again 2');
            route += 'index.html';
            res.statusCode = 200;
            break;
        case '/contact':
            route += 'contact.html';
            res.statusCode = 200;
            break;
        case '/contact-us':
            res.statusCode = 301;
            res.setHeader('Location','/contact');
            res.end;
            break;
        default:
            route += '404.html';
            res.statusCode = 404;
            break;
    }


    fs.readFile(route,(err,data)=>{
        if(err){
            console.log(err)
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    })

    //if html
    // res.setHeader('Content-Type', 'text/html');
    // res.write('<body class="app"></body>');
    // res.write('<h3>Welcome to ckmobile</h3>');
    // res.write('<p>this is a Node.Js train</p>');
    
});

//server.listen(port, hostname, ()
server.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})