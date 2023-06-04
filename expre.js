const express =require('express');
const path =require('path');
const mysql =require('mysql')
const app=express();
const port=3000;
const con =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'@#Sanjukumar123',
    database:'test'
})
con.connect((err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('Connected')
    }
})
app.use(express.static(path.join(__dirname,'public')))
app.get('/hello',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/home.html'))
})
app.get('/about',(req,res)=>{
    res.send('This is about page which we use')
})
app.get('/contact',(req,res)=>{
    res.send('Here is contact')
})
app.get('/menu',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/example.html'))
})
app.get('/show',(req,res)=>{
    con.query('select * from testing;',(err,data,feilds)=>{
        if(err){
            console.log(err)
        }
        else{
            data=Object.values(JSON.parse(JSON.stringify(data)))
            res.send(data)
        }
    })
})
app.listen(port,()=>{
    console.log(`This app is running on http://localhost:${port}`)
})
