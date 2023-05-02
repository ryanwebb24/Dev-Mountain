const express = require('express')
const app = express()

app.use(express.json())
// incoming GET request with url http://localhost:4000/getAString
// this catches the http request and runs a function that we pass in 
// the function should have to params the request and the response
// normally axios will be sending the resquest and getting the response 
// make sure that all end points are unique
app.get("/getAString", (req, res) => {
    console.log('hello')
    res.send('hello')
})

app.listen(4000, () => console.log("running on port 4000"))
