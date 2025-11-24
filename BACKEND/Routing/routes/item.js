const express = require('express')
const router = express.Router()

// / Get Request
router.get('/', (req, res) => {
  res.send('Got a Get Request')
//    res.sendFile('./dummy.html',{root:__dirname});
})


// Post Request
router.post('/items',(req,res)=>{
    res.send('Got a POST Request')
   
})

// Put Request
router.put('/items/:id',(req,res)=>{
    res.send('Got a PUT Request')
})
// Delete Request
router.delete('/items/:id',(req,res)=>{
    res.send('Got a DELETE Request')
})

module.exports=router

