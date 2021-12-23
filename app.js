const express=require('express')
const app=express()
require('dotenv').config()
const cors=require('cors')
const connectDB=require('./config/connectDB')


app.use(express.json())
app.use(cors())

app.use('/productAPI',require('./Routes/productRoutes'))
app.use('/userAPI',require('./Routes/userRoutes'))

connectDB()

const PORT= process.env.PORT || 4001

app.listen(PORT,()=>console.log(`server listening on port ${PORT} `))