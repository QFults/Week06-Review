const router = require('express').Router()
const { join } = require('path')

router.get('/contact', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'contact.html'))
})

router.get('/*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'index.html'))
})

module.exports = router
