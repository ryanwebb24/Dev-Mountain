const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
app.use(express.json())
app.use(cors())

const {SERVER_PORT} = process.env
const {getTasks, createTasks} = require('./controller.js')

app.get('/api/tasks', getTasks)
app.post('/api/tasks', createTasks)

app.listen(SERVER_PORT, () => {
    console.log(`server running on ${SERVER_PORT}`);
})