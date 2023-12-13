const express = require('express');
const app = express();
const users = [
    {id:1, name:'keyboard', quantity:'1pcs'},
    {id:2, name:'monitor', quantity:'3pcs'},
    {id:3, name:'mouse', quantity:'6pcs'},
    {id:4, name:'battery', quantity:'2pcs'},
    {id:5, name:'CPU', quantity:'13pcs'},
    {id:6, name:'Speakers', quantity:'10pcs'},
    {id:7, name:'printer', quantity:'9pcs'},
    {id:8, name:'CD', quantity:'7pcs'},
    {id:9, name:'Modem', quantity:'9pcs'},
    {id:10, name:'Catridgets', quantity:'5pcs'},
]
app.get('/', (req,res)=>{

    res.send("home page")
})

app.get('/users', (req,res)=>{
   
    res.send(users)
})
app.get('/users/:id', (req,res)=>{
    const userID = req.params.id;
    const selectedUser = users.find(user=>user.id == userID)

    if(selectedUser){

        res.send(selectedUser)
    }else{
        res.status(404).send('istifadeci yoxdur')
    }
})

app.listen(3000, ()=>{
    console.log("server quruldu");
})