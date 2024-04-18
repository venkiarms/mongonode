const express=require("express");
const { MongoDBCollectionNamespace } = require("mongodb");
const mongoose=require("mongoose");
const app=express();
const port=8080;
mongoose.connect('mongodb://localhost:27017/mydb').then((db)=>{console.log("DB Connected")}).catch((err)=>{console.log(err);
});

/*app.listen(port,(req,res)=>{
    console.log("server is running on port"+ port);
});*/

/*useNewUrlParser:true,

(err)=>{
    if(!err)
    {
        console.log("connected to db")
    }else{
        console.log("error")
    }
}
*/
const sch={
    name:String,
    email:String,
    id:Number
}

const monmodel=mongoose.model("product",sch);

//db.product.insertOne({name:"sindhu"})
app.post("/post",async(req,res)=>{
    console.log("inside post function");
    const data=new monmodel({
        name:req.body.name,
        email:req.body.email,
        id:req.body.id
    });
    const val=await data.save();
    res.json(val);
})
app.listen(8080,()=>{
    console.log("on port 8080")
})
  