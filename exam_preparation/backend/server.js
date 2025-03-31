// backend/server.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8000;
let users = [];

app.use(cors());
app.use(express.json());

app.get("/users", (req, res) => {
    res.json(users);
});

app.post("/users", (req, res) => {
    users.push(req.body);
    res.json({ message: "User added successfully" });
});

app.get("/sorted", (req, res) => {
    const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
    res.json(sortedUsers);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});