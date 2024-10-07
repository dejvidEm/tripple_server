const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Middleware pre parsing JSON
app.use(express.json());

// Nahrávanie SSL certifikátu
const options = {
  key: fs.readFileSync('~/ssl/localhost.key'),
  cert: fs.readFileSync('~/ssl/localhost.crt'),
};

// Definovanie základnej cesty
app.get('/', (req, res) => {
  console.log('Prijatá požiadavka na základnú cestu');
  res.send('Backend server fungujeeee!');
});

// Pridanie ďalšej cesty pre testovanie
app.post('/auth/register', (req, res) => {
  const data = req.body;
  console.log('Dostal som tieto dáta: ', data);
  res.send('Data received - dostal som všetky dáta potrebné na auth!');
});

// Spustenie HTTPS servera
https.createServer(options, app).listen(PORT, () => {
  console.log(`Server beží na https://localhost:${PORT}`);
});