// HTTP Request method ( CRUD => C = Post, R = Get, U = Put, D = Delete )
// GET - To receive something from the server , 
// POST - To submit resource from the server , 
// PUT - To update the record , 
// DELETE - To delete a record 


// syntax: variable.method ( path, call back function ) 

/* e.g. 
         server.put('/', (req, res) => {
            res.send("Hello World")
         })


*/




const express = require('express')

const server = express()


function firstMiddleware(req, res, next){
    console.log("This is 1st middleware");
    next();
}

function secondMiddleware(req, res, next){
    console.log("This is 2nd middleware");
    next();
}

function globalMiddleware(req, res, next){
    console.log("This is Application level middleware");
    next();
}

server.use(globalMiddleware);           // This is going to be executed for all request

// route-level middleware going to be executed for send request 

server.get('/',[firstMiddleware, secondMiddleware], (req, res) => {
    res.send('Hello! This is Express Server');
})


server.listen(3100, () => {
    console.log(`Server is listening at http://localhost:3100`)
})