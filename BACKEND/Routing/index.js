const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// Types of Requests

// Get Request
app.get('/', (req, res) => {
  res.send('Got a Get Request')
})


// Post Request
app.post('/items',(req,res)=>{
    res.send('Got a POST Request')
})

// Put Request
app.put('/items',(req,res)=>{
    res.send('Got a PUT Request')
})
// Delete Request
app.delete('/items',(req,res)=>{
    res.send('Got a DELETE Request')
})
app.listen(port, () => {
  console.log(`aditya app listening on port ${port}`)
})
