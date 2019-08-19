const fs = require('fs');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("alexpWebsite");
  dbo.collection("pages").drop(function(err, delOK) {
    if (delOK) console.log("Collection deleted");
    db.close();
  });
}); 

fs.readdir('./databaseFiles', function(err, filenames) {
    filenames.forEach(function(filename) {
      if (filename.indexOf(".swp") !== -1) return;
      fs.readFile('./databaseFiles/' + filename, 'utf-8', function(err, content) {

      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("alexpWebsite");
        var myobj = JSON.parse(content);
        dbo.collection("pages").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
      });
      });
    });
  });
