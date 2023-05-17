
const Sequelize = require("sequelize")
const { CONNECTION_STRING } = process.env;
const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

let globalId = 3

module.exports = {
    getTasks: (req,res) => {
        sequelize.query(`SELECT * FROM tasks;`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },
    createTasks: (req, res) => {
        let {name, priority} = req.body
        if (!name || !priority){
            res.status(400).send('New tasks must have a name and a priority')
        } else {
            sequelize.query(`
              INSERT INTO tasks (name, priority)
              VALUES ('${name}', '${priority}')
            `)
            .then(() => res.sendStatus(200))
            .catch(err => console.log(err))
        }
    },
    updateTask: (req, res) => {
      let { id, status } = req.body

      sequelize.query(`
        UPDATE tasks
        SET status = ${!status}
        where id = ${+id}
      `)
      .then(() => res.sendStatus(200))
      .catch(err => console.log(err))
    },
    deleteTask: (req,res) => {
      let {id} = req.params
      sequelize.query(`
        DELETE FROM tasks
        WHERE id = ${+id}
      `)
      .then(() => res.sendStatus(200))
      .catch(err => console.log(err))
    }
}