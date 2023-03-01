// how to create server in node js 
const httpModule = require('http');
const server = httpModule.createServer((req , res)=>{
    console.log(req.url);
    if( req.url === '/' ){
        res.setHeader(
            'Content-Type', 'text/html' ,
            'charset', 'utf-8' ,

        )
        res.write('<h2>hello world</h2>');  
        res.end();
    }
    if( req.url === '/about' ){
        res.setHeader(
            'Content-Type', 'text/html' ,
            'charset', 'utf-8' ,

        )
        res.write('<h2>aboutPage</h2>');  
        res.end();
    }
});

server.listen(3000 , "localhost" , ()=>{
    console.log('server started on port 3000');
});

// const localhost = require('localhost');

// IP 127.0.01 this is ip address of your computer
// this IP address is is mapped to the localhost 3000  