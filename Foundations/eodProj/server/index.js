const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors)

const {getTasks} = require('./controller.js')

app.get('/api/tasks', getTasks)

app.listen(5000, () => {
    console.log('server running on 5000');
})