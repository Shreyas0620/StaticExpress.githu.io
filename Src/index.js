const express = require('express')
const path = require('path')


const app = express();


const StaticPath = path.join(__dirname,'../public')
app.use(express.static(StaticPath))



app.get('/',(req,res)=>{
    res.send('')
})
app.get('/about',(req,res)=>{
res.sendFile(path.join(__dirname, '../public', 'about.html'));
})
app.get('/services',(req,res)=>{
    res.sendFile(path.join(__dirname, '../public', 'services.html'));
})
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname, '../public', 'contact.html'));
})

app.listen(3000,()=>{
        console.log("server is running")
    })
    

