const express = require("express")
const app = express()
app.use(express.json())
require("dotenv").config()
const { SERVER_PORT } = process.env

app.use(express.static(__dirname + "/public"))

app.listen(SERVER_PORT, () => {
    console.log(`server up on ${SERVER_PORT}`)
})