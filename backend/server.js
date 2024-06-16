require('dotenv').config()

const cors = require('cors')
const mongoose = require('mongoose')

const express = require('express')
const exerciseRoutes = require('./routes/exerciseRoutes')
const splitRoutes = require('./routes/splitRoutes')
const userRoutes = require('./routes/user')
const app = express()


//middleware
app.use(express.json())

app.use(cors({
  origin: 'http://localhost:5000'
}));

app.use((req,res,next) => {
  console.log(req.path,req.method)
  next()
})

app.use('/api', exerciseRoutes)
app.use('/api', splitRoutes)
app.use('/api/user', userRoutes)


//connect to database
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 