var  express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("home")
})

app.get("/chatbot",function(req,res){
    res.send("chatbot")
})

app.listen(process.env.PORT||420, () => {
    console.log("server started")
})