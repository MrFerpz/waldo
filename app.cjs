const express = require('express');
const app = express();
const { postEntry, getBoard } = require("./prisma.cjs");
const cors = require('cors');

// necessary lines for correct data-parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// allow requests from other ports
app.use(cors());

async function enterUser(req, res) {
    const name = req.body.name;
    const time = req.body.time;
    await postEntry(name, time);
    const board = await getBoard();
    res.json(board);
}

async function getLeaderboard(req, res) {
    const board = await getBoard();
    res.json(board);
}

app.post("/leaderboard", enterUser);
app.get("/leaderboard", getLeaderboard);

console.log("Server running on 3000!");
app.listen(3000);