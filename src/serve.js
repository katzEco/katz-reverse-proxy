const color = require('bash-color')
const DateLine = require('./modules/date')

function Serve(app) {
  const port = process.env.PORT || 3000

  app.listen(port, () => {
    console.log('')
    console.log(`Server started on ${color.cyan(`http://localhost:${port}`)}`)
    console.log(color.blue(DateLine))
    console.log('')
  })
}

module.exports = Serve
