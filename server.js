const express = require('express');
const https = require('https');
const fs = require('fs');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

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
const allowedOrigins = ['https://tripple-beryl.vercel.app', 'http://localhost:3000'];




// Nastavenie CORS middleware pre všetky cesty
app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Pridaj OPTIONS metódu
  credentials: true, // Ak chceš povoliť cookies a autentifikačné hlavičky
}));




// MongoDB pripojenie
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));





// Základná cesta
app.get('/', (req, res) => {
  console.log('Prijatá požiadavka na základnú cestu');
  res.send('Backend server funguje!');
});

// Použitie autentifikačných ciest
app.use('/auth', authRoutes);




// Spustenie HTTPS servera
https.createServer(options, app).listen(PORT, () => {
  console.log(`Server beží na https://localhost:${PORT}`);
});