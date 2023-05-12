require("dotenv").config()
const {CONNECTION_STRING} = process.env
const Sequelize = require("sequelize")
const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  })
module.exports = {
    createFighter: (req, res) => {
        const {name, power, hp, type} = req.body
        sequelize.query(`
            INSERT INTO fighters (name, power, hp, type)
            VALUES ('${name}', ${+power}, ${+hp}, '${type}');
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },
    getFightersList: (req, res) => {
        sequelize.query(`
           SELECT id, name FROM fighters 
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },
    createWeapon: (req, res) => {
        const {name, power, owner} = req.body
        sequelize.query(`
            INSERT INTO weapons (name, power, owner)
            VALUES ('${name}', ${+power}, ${+owner});
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },
    seed: (req, res) => {
        sequelize.query(`
            DROP TABLE IF EXISTS weapons;
            DROP TABLE IF EXISTS fighters;

            CREATE TABLE fighters(
                id SERIAL PRIMARY KEY,
                name VARCHAR NOT NULL,
                power INT NOT NULL,
                hp INT NOT NULL,
                type VARCHAR NOT NULL
            );

            --create weapons table--
            CREATE TABLE weapons(
                id SERIAL PRIMARY KEY,
                name VARCHAR NOT NULL,
                power INT,
                owner INT REFERENCES fighters(id)
            );
        `)
        .then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        })
        .catch((err) => {
            console.log('you had a Sequelize error in your seed function:')
            console.log(err)
            res.status(500).send(err)
        })
    }
}