const express=require('express') //imported express from package json
const app=express()

app.use(express.json())
const users=[]
app.get('/get',(req,res)=>{
res.send(users)
})
app.post('/create',(req,res)=>{
    const user=req.body
    users.push(user)
res.send(user)

})


app.put('/', () => {
    res.send('Started')
})
app.listen(3000,()=>{
    console.log("app start")
})