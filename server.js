const express = require('express');
const app = express();
const PORT = 3000;

// Middleware pre parsing JSON
app.use(express.json());

// Definovanie základnej cesty
app.get('/', (req, res) => {
  console.log('Prijatá požiadavka na základnú cestu');
  res.send('Hello from the Express server!');
});

// Pridanie ďalšej cesty pre testovanie
app.post('/api/test', (req, res) => {
  console.log('Prijatá POST požiadavka:', req.body);
  res.send('Data received');
});

// Spustenie servera
app.listen(PORT, () => {
  console.log(`Server beží na http://localhost:${PORT}`);
});