let users = []

const express = require("express")
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(cors())
app.use(express.static(process.cwd() + "/public"))
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'eea8c1dfd7b945319e13aa1b541917ce',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

app.get("/japan", (req, res) => {
    rollbar.info("japan page sent")
    res.sendFile(process.cwd() + "/public/japan.html")
})

app.post("/login", (req, res) => {
    let {name} = req.body
    
    if (!name){
        rollbar.error("No username Entered")
        res.status(400).send("Please enter a user")
    } else if (name.length < 8){
        rollbar.error("username was too short")
        res.status(400).send("Username must be longer 8 letters or longer")
    }   else {
        users.push(name)
        rollbar.info("new user created!")
        res.status(200).send("Created User!")
    }
})




app.listen(4000, () => console.log("server up on 4000"))
