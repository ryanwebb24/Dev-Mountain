let houses = require('./db.json')
let currentId = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        const {address, price, imageURL} = req.body
        if (!address || !price || !imageURL){
            res.status(400).send("Please send valid address, price and image URL")
        } else {
            let house = {
                id: currentId,
                address,
                price: +price,
                imageURL
            }
            houses.push(house)
            currentId++
        res.status(200).send(houses)
        }
    },
    updateHouse: (req, res) => {
        let {id} = req.params
        const {type} = req.body
        let index = houses.findIndex(house => +house.id === +id)

        if (houses[index].price === 0 && type === 'minus'){
            res.status(400).send('You cant have a house price of less than 0')
        } else if (type === 'plus'){
            houses[index].price++
            res.status(200).send(houses)
        } else if (type === 'minus'){
            houses[index].price--
            res.status(200).send(houses)
        } else {
            res.sendStatus(400)
        }

    },
    deleteHouse: (req, res) => {
        let {id} = req.params
        let index = houses.findIndex(house => +house.id === +id)
        houses.splice(index, 1)
        res.status(200).send(houses)
    }
}