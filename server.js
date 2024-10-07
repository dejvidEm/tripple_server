const express = require('express');
const app = express();
const PORT = 3000;

// Middleware pre parsing JSON
app.use(express.json());

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

// Spustenie servera
app.listen(PORT, () => {
  console.log(`Server beží na http://localhost:${PORT}`);
});