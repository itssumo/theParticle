const express = require('express');
const app = express();
app.listen(3000, function(){
    console.log("servers started");
  });
  app.get('/', function(req, res){
      res.sendFile(__dirname + "/test.html")
  })