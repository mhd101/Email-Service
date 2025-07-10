const express = require("express")
const app = express()
const emailRoutes = require("./routes/EmailRoutes")

app.use(express.json())
app.use("/api", emailRoutes)

const PORT = 8000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})



