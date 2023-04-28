const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const pokemon = require('./models/pokemon')

//I.N.D.U.C.E.S.

app.get('/',(req,res) => {
    res.send('welcome to the Pokemon App!')
})

app.get('/pokemon',(req,res) => {
    res.send(pokemon)
})








//-------------------------------
app.listen(PORT,() =>{
    console.log(`listening on port: ${PORT}`)
})