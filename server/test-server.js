const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true
}));

// Health check endpoint
app.get("/health", (req, res) => {
    res.json({ status: "OK", timestamp: new Date().toISOString() });
});

app.get("/", (req, res) => {
    res.json({ message: "Server is running!" });
});

app.get("*", (req, res) => {
    res.json({ message: "Fallback route" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Test server listening on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/health`);
    console.log(`Main route: http://localhost:${PORT}/`);
});
