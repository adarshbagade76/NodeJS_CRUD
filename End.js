const express=require('express')
const app=express()

app.use(express.json())

const users=[]

app.get('/get',(res,req)=>{
res.send(users)
})
app.post('/create',(res,req)=>{
 const user=req.body
 users.push(user)
 res.send(user)
})