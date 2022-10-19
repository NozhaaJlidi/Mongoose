const express = require('express')
const app = express()


require('dotenv').config({path:"./config/.env"})
const port =process.env.PORT
const connectDB = require('./config/DB_Connect')
connectDB()

app.use(express.json())
app.use('/user',require('./routes/userRoutes'))

app.listen(port,(err) => 
err ?  console.log(err) : console.error("server is already listening"))
