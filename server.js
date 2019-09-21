const express = require("express")
const app = express();

app.get("/", (req, res) => {
    res.send("Portfolio server")
})

app.listen(process.env.PORT || 5004, () => {
    console.log("Server is listening on port 5004")
})