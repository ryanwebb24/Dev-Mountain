const express = require("express")
const cors = require("cors")
const {sequelize} = require("./util/database.js")
const {User} = require("./models/user.js")
const {Post} = require("./models/post.js")
require("dotenv").config()
let {SECRET, PORT} = process.env
const { login, register } = require("./controller/auth")
const { addPosts, getAllPosts, getCurrentUserPosts, deletePosts, editPosts } = require("./controller/posts")
const { isAuthenticated } = require("./middleware/isAuthenticated")
//app setup
const app = express()
app.use(cors())
app.use(express.json())
// data base relationships and setup 
User.hasMany(Post)
Post.belongsTo(User)
// auth routes
app.post("/register", register)
app.post("/login", login)
// post routes
app.get("/posts", getAllPosts)
app.get("/userposts/:userId", getCurrentUserPosts)
app.post("/posts", isAuthenticated, addPosts)
app.put("/posts/:id", isAuthenticated, editPosts)
app.delete("/posts/:id", isAuthenticated, deletePosts)

sequelize.sync()
.then(() => {
  app.listen(PORT, () => {console.log(`Server running on ${PORT}`)})
})
.catch(err => console.log(err))


