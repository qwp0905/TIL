const awsServerlessExpress = require("/opt/nodejs/node_modules/aws-serverless-express")
const express = require("/opt/nodejs/node_modules/express")

const app = express()

app.get("/hello",(req,res)=>{
  res.json({message:'hello'})
})
app.get("/", (req, res) => {
  res.json({ response: true, msg: "연결 성공" })
})


const server = awsServerlessExpress.createServer(app)

module.exports.handler = (event, context) =>
  awsServerlessExpress.proxy(server, event, context)