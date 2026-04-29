const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let inventory = []; 

app.get('/health', (req, res) => res.send("OK"));

app.post('/api/assets', (req, res) => {
    inventory.push(req.body);
    res.status(201).json({ message: "Saved" });
});

app.get('/api/assets', (req, res) => res.json(inventory));

app.listen(5000, () => console.log("Backend running on 5000"));
