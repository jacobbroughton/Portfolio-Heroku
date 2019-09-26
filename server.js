const express = require("express")
const app = express();
var path = require("path");

// MUST UPDATE BUILD FOLDER WHENEVER I PUSH TO HEROKU
// run this in the client folder....npm run build
app.use(express.static(path.join(__dirname, "client/build")))

// app.get("/", (req, res) => {
//     res.send("Portfolio server")
// })

// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'client/public/index.html'), function(err) {
//       if (err) {
//         res.status(500).send(err)
//       }
//     })
//   })

app.get('/*', (req, res) => {
  let url = path.join(__dirname, '../client/build', 'index.html');
  if (!url.startsWith('/jlbroughton/'))
    url = url.substring(1);
  res.sendFile(url);
});


app.listen(process.env.PORT || 5004, () => {
    console.log("Server is listening on port 5004")
})