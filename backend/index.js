const express = require('express');
const brothersRoute = require('./routes/brothers');
const app = express();
const PORT = 3000;

require('./db');
console.log('App is starting...'); 

// Middleware to parse JSON data
app.use(express.json());
app.use('/brothers', brothersRoute); 


app.get('/', (req, res) => {
  // res.send('Hello from Express!');
  res.sendFile('index.html', { root: "/../assets/html/" });
});

app.get('/css/:fileName', (req, res) => {
  res.sendFile(req.params["fileName"], { root: "/../assets/css/" });
});

app.get('/html/:fileName', (req, res) => {
    res.sendFile(req.params["fileName"], { root: "/../assets/html/" });
});

app.get('/images/:fileName', (req, res) => {
  res.sendFile(req.params["fileName"], { root: "/../images/" });
});

app.get('/js/:fileName', (req, res) => {
  res.sendFile(req.params["fileName"], { root: "/../assets/js/" });
});

app.get('/webfonts/:fileName', (req, res) => {
    res.sendFile(req.params["fileName"], { root: "/../assets/webfonts/" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
