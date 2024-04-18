const express=require("express");
const mongoose=require("mongoose");
const app=express();
const port=8000;
mongoose.connect('mongodb://localhost:27017/mydb').then((db)=>{console.log("DB Connected")}).catch((err)=>{console.log(err);
});

const producers = { name: "Company Inc", address: "Highway 37" };
dbo.collection("producers").insertOne(myobj, function(err, res) {
  if (err) throw err;
console.log("1 document inserted");

app.listen(port,(req,res)=>{
console.log("server is running on port"+ port);
});
});

