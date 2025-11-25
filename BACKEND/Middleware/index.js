const express = require('express')
const app = express()
const port = 3000

// loading middleware into the app
// Inbuilt Middleware
// app.use(express.json());

// Middleware -logging,authentication,validation
// Creation of  a Middleware
// const LoggingMiddleware= function (req, res, next) {
//   console.log('Logging kr rha hu')
//   next();
// }

// const AuthMiddleware= function (req, res, next) {
//   console.log('Authenticaion kr rha hu')
//   next();
// }

// const ValidationMiddleware= function (req, res, next) {
//   console.log('Validation kr rha hu')
//   next();
// }
// Loading Middleware into application
// app.use(LoggingMiddleware);
// app.use(AuthMiddleware);
// app.use(ValidationMiddleware);

const route=require('./routes/route')
// Mounting the routes
app.use('/api',route)

app.get('/', (req, res) => {
    console.log("Main router handler hu")
    console.log(req.body);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
