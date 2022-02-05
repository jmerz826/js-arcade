require("dotenv").config()
const PORT = process.env.PORT || 9000
const server = require("./api/server")

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
