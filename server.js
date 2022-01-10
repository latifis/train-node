const http = require('http');
const fs = require('fs');
// const { hostname } = require('os');
const port = 3000;


const  server = http.createServer((req,res)=>{
    //if text
    res.setHeader('Content-Type', 'text/html');
    // res.write('Welcome to ckmobile');


    //routing
    let route = "./views/";

    switch (req.url) {
        case '/':
            route += 'index.html';
            break;
        case '/contact':
            route += 'contact.html';
            break;
        default:
            route += '404.html';
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