const exp = require('express')
require('dotenv').config()

const Routes = require('./src/route')
const Serve = require('./src/serve')

const app = exp()

Routes(app, __dirname)
Serve(app)
