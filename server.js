const http = require("http")
const app = require("./app")
const port = 3000 || process.env.PORT
//const file = require("./index.html")

const server = http.createServer(app)

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})