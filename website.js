const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  // res.send('Hello from Express!');
  res.sendFile('index.html', { root: "assets/html/" });
});

app.get('/css/:fileName', (req, res) => {
  res.sendFile(req.params["fileName"], { root: "assets/css/" });
});

app.get('/html/:fileName', (req, res) => {
    res.sendFile(req.params["fileName"], { root: "assets/html/" });
});

app.get('/images/:fileName', (req, res) => {
  res.sendFile(req.params["fileName"], { root: "images/" });
});

app.get('/js/:fileName', (req, res) => {
  res.sendFile(req.params["fileName"], { root: "assets/js/" });
});

app.get('/webfonts/:fileName', (req, res) => {
    res.sendFile(req.params["fileName"], { root: "assets/webfonts/" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})