const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors)

app.listen(5000, () => {
    console.log('server running on 5000');
})