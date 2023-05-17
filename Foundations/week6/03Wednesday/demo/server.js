const express = require("express")
const app = express()
app.use(express.json())
require("dotenv").config()
const { SERVER_PORT } = process.env

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/public/index.html")
})
app.get('/styles', (req,res) => {
    res.sendFile(__dirname + "/public/styles.css")
})
app.get('/main', (req,res) => {
    res.sendFile(__dirname + "/public/main.js")
})


app.listen(SERVER_PORT, () => {
    console.log(`server up on ${SERVER_PORT}`)
})