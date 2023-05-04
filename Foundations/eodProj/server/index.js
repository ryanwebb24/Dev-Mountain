const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors)

const {getTasks, createTasks} = require('./controller.js')

app.get('/api/tasks', getTasks)
app.post('/api/tasks', createTasks)

app.listen(5000, () => {
    console.log('server running on 5000');
})