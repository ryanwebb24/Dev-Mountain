const { Post } = require("../models/post.js")
const { User } = require("../models/user.js")

module.exports = {
  getAllPosts: async(req, res) => {
    try {
      const posts = await Post.findAll({
        where: {privateStatus: false},
        include: [{
          model: User,
          required: true,
          attributes: [`username`]
        }]
      })
      res.status(200).send(posts)
    } catch (err) {
      console.log('get all posts error')
      console.log(err)
      res.sendStatus(400)
    }
  },
  getCurrentUserPosts: async(req, res) => {
    try {
      const {userId} = req.params
      const userPosts = await Post.findAll({
        where: {userId},
        include: [{
          model: User,
          required: true,
          attributes: [`username`]
        }]})
        res.status(200).send(userPosts)
    } catch (err) {
      console.log("get user posts error")
      console.log(err)
      res.sendStatus(400)
    }
  },
  addPosts: async(req, res) => {
    try {
      const { title, content, status, userId } = req.body
      await Post.create({
        title,
        content,
        privateStatus: status,
        userId
      })
      res.sendStatus(200)
    } catch (err) {
      console.log("add post error")
      console.log(err)
      res.sendStatus(400)
    }
  },
  editPosts: async(req, res) => {
    try {
      const { id } = req.params
      const { status } = req.body
      await Post.update(
        {privateStatus: status},
        {where: {id: +id}}
      ) 
      res.sendStatus(200)
    } catch (err) {
      console.log("edit post error")
      console.log(err)
      res.sendStatus(400)
    }
  },
  deletePosts: async(req, res) => {
    try {
      const { id } = req.params
      await Post.destroy({
        where: {id: +id}
      })
      res.sendStatus(200)
    } catch (err) {
      console.log("delete post error")
      console.log(err)
      res.sendStatus(400)
    }
  }
}