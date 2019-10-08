const express = require("express")
const app = express();
var path = require("path");

// MUST UPDATE BUILD FOLDER WHENEVER I PUSH TO HEROKU
// run this in the client folder....npm run build
// app.use(express.static(path.join(__dirname, "client/build")))

// app.get("/", (req, res) => {
//     res.send("Portfolio server")
// })

// app.get('/contact', function(req, res) {
//   res.send("this is the contact route from the server")
//   })

if(process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
  })
} else {
  app.use(express.static(path.join(__dirname, "/client/public")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/public/index.html"))
  })
}

// app.get("*", () => {
//   res.sendFile(path.join(__dirname, "./client/public/index.html"))
// })

app.listen(process.env.PORT || 5004, () => {
    console.log("Server is listening on port 5004")
})