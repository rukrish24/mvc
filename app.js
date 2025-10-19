const express = require('express')
const path = require('path')
const userRoute = require('./routes/UserRoutes')

const app = express()
app.use(express.urlencoded({extended : true}))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')));

app.use('/',userRoute)

app.listen(3000,()=>{
    console.log("server listening at http://localhost:3000/signup");
})
