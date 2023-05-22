const express = require("express")
const path = require("path")
const app = express()

const {getplaylist, addplaylist, updateplaylist, deleteplaylist} = require("./controller/playlist-controller")
const {getRecommended, updateRecommended} = require("./controller/recommended-controller")

require("dotenv").config()
const {SERVER_PORT} = process.env

app.use(express.json())
app.use(express.static(path.join(process.cwd() + "/client")))

// playlist end-points
// app.get("/playlist", getPlaylist)
// app.post("/playlist", addPlaylist)
// app.post("playlist/:id", updatePlaylist)
// app.delete("playlis/:id", deletePlaylist)
// recommended end-points
// app.get("/recommended", getRecommended)
// app.post("/recommended", addRecommended)

app.listen(SERVER_PORT, () => {console.log(`Server running on port ${SERVER_PORT}`)})