

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
const dbo=new dbo.db(MongoClient.db)

MongoClient.connect(url, function(err, dbo) {
  if (err) throw err;
  var dbo = dbo.db("mydb");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  
  dbo.collection("producers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

   