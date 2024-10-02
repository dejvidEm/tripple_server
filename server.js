const express = require('express');
const cors = require('cors');
const app = express();

// Povolenie CORS, aby frontend z inej domény mohol robiť požiadavky
app.use(cors());

// Middleware pre spracovanie JSON requestov
app.use(express.json());

// Jednoduchý API endpoint pre registráciu
app.post('/api/register', (req, res) => {
  const { fullName, email, password } = req.body;

  // Tu môžeš pridať validáciu a prácu s databázou, napríklad ukladanie užívateľských dát
  console.log('Received registration data:', { fullName, email, password });

  // Odošleme úspešnú odpoveď
  res.json({ message: 'User registered successfully', user: { fullName, email } });
});

// Server beží na porte 3000
app.listen(8080, () => {
  console.log('Server is running on http://195.28.146.105:8080');
});