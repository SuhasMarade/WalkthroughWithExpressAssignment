const http = require('http');

const PORT = 8080;
const HOSTNAME = 'localhost';

const server = http.createServer((req,res) =>{
    if(req.url == '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html')
        res.end('<h1>"Welcome to Men & Women Dummy Data"</h1>');
    }
    else if(req.url == '/men'){
        const options = {
            hostname:'fakestoreapi.com',
            path: "/products/category/men's%20clothing?limit=10",
            method: 'GET'
        }
        const apiReq = http.request(options,(apiRes) =>{
            apiRes.on('data', (data) =>{
                res.statusCode = 200;
                res.setHeader('Content-Type','application/json')
                res.end(data.toString());
            })
        });
        apiReq.on('error',(e) =>{
            res.statusCode = 500;
            res.setHeader('Content-Type','text/plain')
            res.end('error: ', e);
        })
        apiReq.end();
    }
    else if(req.url == '/women'){
        const options = {
            hostname:'fakestoreapi.com',
            path: "/products/category/women's%20clothing?limit=10",
            method: 'GET'
        }
        const apiReq = http.request(options,(apiRes) =>{
            apiRes.on('data', (data) =>{
                res.statusCode = 200;
                res.setHeader('Content-Type','application/json')
                res.end(data.toString());
            })
        });
        apiReq.on('error',(e) =>{
            res.statusCode = 500;
            res.setHeader('Content-Type','text/plain')
            res.end('error: ', e);
        })
        apiReq.end();
    }
    else{
        res.statusCode = 500;
        res.setHeader('Content-Type','text/plain')
        res.end('Page not Found');
    }
});

server.listen(PORT, () =>{
    console.log(`Server Running at ${HOSTNAME} : ${PORT}`)
});