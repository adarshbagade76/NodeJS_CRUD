const express=require('express') //imported express from package json
const app=express();
const mongoose = require('mongoose');

app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/crud', {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB connected")
}).catch((e) => {
    console.log(e)
});

const UserSchema = new mongoose.Schema({
    name: String,
    company: String,
    password: String,
    PhoneNumber: Number

})

const User = mongoose.model('User', UserSchema)

app.get('/get',async(req,res)=>{
const users = await User.find({});
res.send(users)
})


app.post('/create',async(req,res)=>{
    const user=new User(req.body)
    await user.save();
   res.send(user)

})

app.put('/', () => {
    res.send('Started')
})
app.listen(3000,()=>{
    console.log("app start")
})