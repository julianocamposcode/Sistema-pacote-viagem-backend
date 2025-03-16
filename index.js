import express from "express"
import rotaPacote from "./routes/rotaPacote.js"

const host = '0.0.0.0'
const port = 4000

const app = express()

app.use('/clientes', rotaPacote)

app.listen(port, host, () => {
    console.log(`Servidor backend em execução : http://${host}: ${port}`)
})