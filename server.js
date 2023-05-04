require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000


const Pokemon = require('./models/pokemon')


const {connect, connection} = require('mongoose')


//Database connection
connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
connection.once('open',()=>{
    console.log('connect to mongo')
})



// view engine
const reactViewsEngine = require('jsx-view-engine')
.createEngine()
app.engine('jsx',reactViewsEngine)
app.set('view engine','jsx')
app.set('views','./views')



//middleware
app.use(express.urlencoded({extended:false}))
app.use((req,res,next)=>{
    console.log('middleware is running...')
    next();
})


//I.N.D.U.C.E.S.

//Index
// app.get('/',(req,res) => {
//     res.send('welcome to the Pokemon App!')
// })

// app.get('/pokemon',(req,res)=> {
//     res.render('Index',{pokemon})
// })

app.get('/pokemon',async(req,res) =>{
    // console.log('Index controller fn is running...')
    try{
        const foundPokemon = await Pokemon.find();
        res.render('pokemon/Index',{pokemon: foundPokemon})
    } catch (err) {
        res.status(200).send(err)
    }
})



// New
app.get('/pokemon/new',(req,res) =>{
    res.render('New')
})

//Create 
app.post('/pokemon', async (req, res) =>{
    try{
        req.body.database = req.body.database === 'on'
        const newPokemon = await Pokemon.create(req.body)
        console.log(newPokemon)
        console.log('new pokemon added to database')
    } catch(err){
        res.status(400).send(err)
    }
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