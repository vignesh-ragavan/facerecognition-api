const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('working')
})
app.listen(3001,()=>{


    console.log('listening 3001')
})