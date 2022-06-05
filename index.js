const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const paymentRoutes = require("./routes/payment")
const app = express()
app.use(cors())


dotenv.config()

app.use(express.json())

app.options('*', cors()) 
app.use("/api/payment",paymentRoutes)

const port = process.env.PORT || 8080

app.listen(port, ()=>{
    console.log("server listening at ", port);
})