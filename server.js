const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const pokemon = require('./models/pokemon')


const reactViewsEngine = require('jsx-view-engine')
.createEngine()
app.engine('jsx',reactViewsEngine)
app.set('view engine','jsx')
app.set('views','views')



//I.N.D.U.C.E.S.

//Index
app.get('/',(req,res) => {
    res.send('welcome to the Pokemon App!')
})

app.get('/pokemon',(req,res)=> {
    res.render('Index',{pokemon})
})



//Show
app.get('/pokemon/:id',(req,res) => {
    res.render('Show',{
        pokemon: pokemon[req.params.id]
    })
})





//-------------------------------
app.listen(PORT,() =>{
    console.log(`listening on port: ${PORT}`)
})