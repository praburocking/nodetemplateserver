const app=require('./app')
const http= require('http')
const scheduler=require('./services/scheduler/core/scheduler')
const dotenv=require('dotenv')
const server = http.createServer(app)


scheduler.runScheduler()

server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})