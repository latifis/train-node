const http = require('http');
// const { hostname } = require('os');
const port = 3000;

const  server = http.createServer((req,res)=>{
    //if text
    // res.setHeader('Content-Type', 'text/plain');
    // res.write('Welcome to ckmobile');

    //if html
    res.setHeader('Content-Type', 'text/html');
    res.write('<body class="app"></body>');
    res.write('<h3>Welcome to ckmobile</h3>');
    res.write('<p>this is a Node.Js train</p>');
    res.end();
});

//server.listen(port, hostname, ()
server.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})