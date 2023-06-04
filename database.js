/* These are two ways in which we can make connecction to our database first one is createpool and second one is createConnection */

//In createPool we can make multiple connection to multiple databases by giving connection limit


// const {createPool} =require('mysql');

// const pool =createPool({
//     host:'localhost',
//     user: 'root',
//     password:'',
//     database:'',
//     connectionLimit:5
// })

// pool.query('select * from testing',(err,result,field)=>{
//     if(err){
//         console.log("Not connected "+err)
//     }
//     else{
//         return console.log(result)
//     }
// })


var mysql =require('mysql')
// import mysql from 'node:mysql';

const con = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'',
    database:''
})

con.connect((err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("connected")
    }
    q="insert into testing(name,roll) values ?";
    values =[
        ['gopal',34],
        ['suraj',567],
        ['neetu',78]
]
// con.query(q,[values],(err,result)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log('Number of records inserted '+ result.affectedRows)
//     }
// })
    con.query('select * from testing;',(err,result,feilds)=>{
        if(err){
            console.log(err)
    
        }
        else{
           return console.log(result)
        }
    })
    
})


