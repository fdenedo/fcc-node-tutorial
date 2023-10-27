const http = require('http');

const server = http.createServer((req, res) => { // REQuest, RESponse
    // request is a massive object
    // console.log(req);

    // Have to return, as there is a res.end that tries to run after the ones wrapped in if statements
    // As the response stream has already ended, that will have nothing to write to and will throw an error
    if(req.url === '/') {
        return res.end('Welcome to my app');
    }
    if(req.url === '/about') {
        return res.end('This is the about page');
    }
    res.end(`
        <h1>OOPS!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Back Home</a>
    `)
})

server.listen(5000);