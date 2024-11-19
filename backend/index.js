const express = require('express');
const path = require('path'); 
const brothersRoute = require('./routes/brothers');
const app = express();
const PORT = 3000;


require('./db');
console.log('App is starting...'); 

// Middleware to parse JSON data
app.use(express.json());
app.use('/brothers', brothersRoute); 

const assetsPath = path.join(__dirname,'..', 'assets'); //absolute path to the assets folder
const imagesPath = path.join(__dirname,'..', 'images'); // Absolute path to the images folder

// Serve static files from 'assets' folder
app.use('/assets', express.static(path.join(__dirname, '..', 'assets')));

// Serve static files from 'images' folder
app.use('/images', express.static(path.join(__dirname, '..', 'images')));

// Serve static HTML files (like index.html, brothers.html)
app.use(express.static(path.join(__dirname, '..', 'assets', 'html')));

app.get('/', (req, res) => {
  // res.send('Hello from Express!');
  res.sendFile('index.html', { root: path.join(__dirname, '..', 'assets','html') });
});

app.get('/css/:fileName', (req, res) => {
  res.sendFile(req.params["fileName"], { root: path.join(__dirname, '..', 'assets','css')});
});

app.get('/html/:fileName', (req, res) => {
    const filePath = path.join(__dirname, '..', 'assets', 'html', req.params["fileName"]);
    console.log('Resolved file path:', filePath);  // Log the resolved path
    res.sendFile(req.params["fileName"], { root: path.join(assetsPath, 'html') });
});

app.get('/images/:fileName', (req, res) => {
  res.sendFile(req.params["fileName"], {root: path.join(__dirname, '..', 'images')});
});

app.get('/js/:fileName', (req, res) => {
  res.sendFile(req.params["fileName"], { root: path.join(__dirname, '..', 'assets','js') });
});

app.get('/webfonts/:fileName', (req, res) => {
    res.sendFile(req.params["fileName"], { root: path.join(__dirname, '..', 'assets','webfonts') });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
