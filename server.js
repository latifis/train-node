const http = require('http');
const { hostname } = require('os');
const port = 3000;

const  server = http.createServer((req,res)=>{
    console.log("A request is made")
})

//server.listen(port, hostname, ()
server.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})