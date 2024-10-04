const express = require('express');

const app = express();
const PORT = 4433; // HTTPS port, o SSL sa stará proxy

const cors = require('cors');
app.use(cors());

// Testovacia trasa pre overenie
app.get('/test', (req, res) => {
  res.json({ message: 'Backend is working on port 4433!' });
});

// Spustenie servera na porte 443
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});