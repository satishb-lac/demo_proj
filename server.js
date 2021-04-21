const http = require('http')
const server = http.createServer((req,res) => {
console.log('creating connection')
res.end("Hello this is test - app")
})
const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log('Listening'))