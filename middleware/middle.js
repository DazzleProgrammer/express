const express = require('express')

const server = express()

//============================================== Way 1 =====================================================
/*  

server.get('/', (req,res,next) => {
    console.log('1st middleware is hit')
    next()
},

(req, res) => {
    res.send('Hello! This is Express Server')
},

)


server.listen(3200, () => {
    console.log(`Server is running at http://localhost:3200`)
})

*/
//============================================== Way 2 =====================================================

server.get('/', (req, res, next) => {
    res.send('1st middleware is hit')
    next()
})


server.get('/', (req, res) => {
    res.send('Hello! This is Express Server')
  
})


server.listen(3200, () => {
    console.log(`Server is running at http://localhost:3200`)
})



// next() is use to call the next middleware

// Error: Cannot set headers after they are sent to the client

// If we are sending responce { res.send() } in 1st middleware and still calling the next middleware using next() then we get the above error 