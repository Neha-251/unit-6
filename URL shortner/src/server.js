const app = require("./index")

const connect = require("./configs/db")

app.listen(4900, async()=>{
    try {
        await connect()
        console.log("listening on 4900")
    } catch (error) {
        console.log('error', error)
        
    }
})