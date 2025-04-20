const express = require('express');
const app = express();
const prisma = require("./prisma");
const cors = require('cors');

// necessary lines for correct data-parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// allow requests from other ports
app.use(cors());

async function getBoard(req, res) {
    const board = await prisma.getBoard();
    res.json(board);
}

async function postEntry(req, res) {
    const name = req.body.name;
    const time = req.body.time;
    await prisma.postEntry(name, time);
    const board = await prisma.getBoard();
    res.json(board);
}

app.get("/leaderboard", getBoard);
app.post("/leaderboard", postEntry);

app.listen(5432);