var express = require('express');
var app = express();
const rateLimit = require("express-rate-limit");
const controller = require("./controller")
  
app.use(
    rateLimit({
      windowMs: 1 * 60 * 1000, 
      max: 10,
      message: "You cant make more than 10 request per minute",
      headers: true,
    })
  );

app.use("/", controller)

  
app.listen(5000, function(err){
    if (err) console.log(err);
    console.log("listening on Port 5000");
});