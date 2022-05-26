const app = require("./index.js");
const connect = require("./config/db");

app.listen(4700, async()=>{
    try {
        await connect();
    } catch (error) {
        console.log("error");
    }
    console.log("listening on port 4700");
});