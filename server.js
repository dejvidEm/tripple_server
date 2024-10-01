const express = require("express");
const cors = require("cors"); // Middleware pre CORS
const app = express();
const PORT = 8000;

// Middleware na parsovanie JSON requestov
app.use(express.json());

// Povoliť CORS len pre konkrétnu doménu (napr. doménu Vercel)
app.use(cors({
    origin: 'https://tripple-beryl.vercel.app', // nahraď skutočnou URL z Vercelu
    methods: 'GET,POST,PUT,DELETE'
}));

// Jednoduchý GET endpoint
app.get("/api/home", (req, res) => {
    res.json({ message: "Hello world" });
});

// POST endpoint pre registráciu užívateľa
app.post("/api/register", (req, res) => {
    const { fullName, email, password } = req.body;

    // Tu by si mal pridať logiku pre ukladanie užívateľa do databázy (MongoDB)
    console.log('Received data:', { fullName, email, password });

    // Odpoveď po úspešnom prijatí dát
    res.json({ message: 'Registration successful' });
});

// Spusti server
app.listen(PORT, '0.0.0.0', () => { // '0.0.0.0' umožní prístup z vonku
    console.log(`Server beží na porte ${PORT}!`);
});