const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const inventoryDb = [
    'greeting card', 'wagon', 'computer', 'table', 'chair',
    'milk', 'sailboat', 'conditioner', 'rusty nail', 'desk'
]

app.get('/api/inventory', (req, res) => {
    const item = req.query.item
    const returnArr = []
    if (item !== undefined){
        for (let i in inventoryDb){
            if (inventoryDb[i].includes(item)){
                returnArr.push(inventoryDb[i])
            }
        }
        res.status(200).send(returnArr)
    }else{
        res.status(200).send(inventoryDb)
    } 
})

app.get('/api/inventory/:index', (req,res) => {
    const {index} = req.params
    res.status(200).send(inventoryDb[index])
})

app.listen(5050, () => {
    console.log('server running on 5050');
})