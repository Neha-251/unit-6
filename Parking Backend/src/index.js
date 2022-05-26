const express = require("express");
const app = express();
module.exports = app; 


app.use(express.json());


const usersController = require("./controllers/user.controller");
const plotsController = require("./controllers/plot.controller");
const floorController = require("./controllers/floor.controller");
const parkingController = require("./controllers/parking.controller");
const assistantController = require("./controllers/assistant.controller");


app.use("/users",usersController);
app.use("/plots",plotsController);
app.use("/floors",floorController);
app.use("/parking",parkingController);
app.use("/assistant",assistantController);