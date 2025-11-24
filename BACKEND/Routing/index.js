const express = require('express')
const app = express()
const port = 3000
// import items ki router file
const item=require('./routes/item');
const birds=require('./routes/birds');
// load into application
app.use('/api',item);
app.use('/filler',birds);

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// Types of Requests

// Get Request
// app.get('/', (req, res) => {
//   // res.send('Got a Get Request')
//    res.sendFile('./dummy.html',{root:__dirname});
// })


// // Post Request
// app.post('/items',(req,res)=>{
//     res.send('Got a POST Request')
   
// })

// // Put Request
// app.put('/items/:id',(req,res)=>{
//     res.send('Got a PUT Request')
// })
// // Delete Request
// app.delete('/items/:id',(req,res)=>{
//     res.send('Got a DELETE Request')
// })
// app.listen(port, () => {
//   console.log(`aditya app listening on port ${port}`)
// })
