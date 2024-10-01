const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Povolenie CORS pre všetky požiadavky
app.use(express.json()); // Parsovanie JSON telies

// Základná cesta
app.get('/', (req, res) => {
  res.send('Ahoj! Toto je jednoduchý backend server.');
});

// Príklad API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Ahoj z backendu!' });
});

// Spustenie servera
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server je spustený na http://localhost:${PORT}`);
  });