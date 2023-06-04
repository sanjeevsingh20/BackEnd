const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars');
const files=require('express-fileupload')
const blogs= require('../node/data/blogs')
const app = express()
const port = 3000;
console.log(blogs.blogs[0].title)


app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
     
    res.render('home',{
        blogs:blogs.blogs
    })  
})

app.get('/hasit/:title', (req, res) => {
    myblg=blogs.blogs.filter((e)=>{
        return e.title==req.params.title
    })  
    res.send(`${myblg[0]}`) 
})

app.post('/upload',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/home.html'))
})

app.get('/form',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/gop.html'))
})

app.get('/home', (req, res) => {
    blogs.blogs.forEach(element => {
        console.log(element)
    });
    res.send("This page is working so what!!")
})

app.get('/user/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`)
})

app.listen(port, () => {
    console.log(`this app is running on port http://localhost:${port}`)
})