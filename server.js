const express = require('express');
const https = require('https');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware pre parsing JSON
app.use(express.json());

// Nahrávanie SSL certifikátu
const options = {
  key: fs.readFileSync('/home/david/ssl/localhost.key'),
  cert: fs.readFileSync('/home/david/ssl/localhost.crt'),
};

// Dovolené domény na requesty
const allowedOrigins = ['https://tripple-beryl.vercel.app'];

// Nastavenie CORS middleware pre všetky cesty
app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Pridaj OPTIONS metódu
  credentials: true, // Ak chceš povoliť cookies a autentifikačné hlavičky
}));

// Definovanie základnej cesty
app.get('/', (req, res) => {
  console.log('Prijatá požiadavka na základnú cestu');
  res.send('Backend server fungujeeee!');
});

// Pridanie ďalších ciest pre testovanie
app.post('/auth/register', (req, res) => {
  const data = req.body;
  console.log('Dostal som tieto dáta: ', data);
  res.send('Data received - dostal som všetky dáta potrebné na auth!');
});

// Pridaj ďalšie cesty, ktoré potrebuješ
app.get('/auth/login', (req, res) => {
  res.send('Toto je prihlásenie.');
});

// Spustenie HTTPS servera
https.createServer(options, app).listen(PORT, () => {
  console.log(`Server beží na https://localhost:${PORT}`);
});