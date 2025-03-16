import express from "express"
import rotaPacote from "./routes/rotaPacote.js"

const host = '0.0.0.0'
const port = 4000

const app = express()

app.use(express.json());

app.use('/pacotes', rotaPacote)

app.listen(port, host, () => {
    console.log(`Servidor backend em execução : http://${host}: ${port}`)
})