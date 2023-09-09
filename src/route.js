function Routes(app, root) {
  app.get('/', (req, res) => {
    res.send('express server')
  })
}

module.exports = Routes
