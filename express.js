// Express => Routing , Middleware , Template Engine , High Performance , Easy to learn 

// Create Express Server 


// Step 1 :- Importing Express 

const express = require('express')

// server
const server = express();


// Step 2 :- Handle Request

server.get('/', (req, res)=>{
    res.send('Welcome to Express Server')
})

// Step 3 :- 

server.listen(3100, () => {
    console.log('Server is listening on 3100')
})

// Here we are not importing http modules because express module take care of that 

// if we want to handle all default request like get, post, etc in a single thread we can use use() request 

// res.send() is a wrapper function which works like res.end() but it have more properties like it adds request headers like content type or content length by default.