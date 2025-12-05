import express from'express';
const app=express();
app.get('/users',(req,res) =>{
    res.send("hello this is dedeepya");
})
app.get('/get-users', (req,res) => {
    res.send("hello");
})
app.listen(7001,()=>{
    console.log("server running at port 7001")
});

console.log("hello")