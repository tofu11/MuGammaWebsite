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
  res.send('Welcome to the Brothers Profiles API!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
