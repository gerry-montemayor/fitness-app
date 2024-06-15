const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

// login user
const loginUser = async (req, res) => {
  const { username, password } = req.body
  try {
    const user = await User.login(username, password)

    const token = createToken(user._id)
    res.status(200).json({ username, token })
  } catch (error) {
    res.status(400).json({ error: `${error}` })
  }
}


//sign up user
const signupUser = async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await User.signup(username, password)

    //create token
    const token = createToken(user._id)


    res.status(200).json({ username, token })
  } catch (error) {
    res.status(400).json({ error: `${error}` })
  }
}

module.exports = { signupUser, loginUser }