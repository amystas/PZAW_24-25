const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors()); 
app.use(express.json()); 

// Endpoint GET - pobiera dane z pliku
app.get("/employees", (req, res) => {
    fs.readFile("_data.txt", "utf8", (err, data) => {
        if (err) {
            console.error("Błąd odczytu pliku:", err);
            return res.status(500).json({ error: "Błąd serwera" });
        }
        try {
            const employees = JSON.parse(data); // Konwersja na JSON
            res.json(employees);
        } catch (parseError) {
            console.error("Błąd parsowania JSON:", parseError);
            res.status(500).json({ error: "Niepoprawny format pliku" });
        }
    });
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Serwer działa na http://localhost:${PORT}`);
});

