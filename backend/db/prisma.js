const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function postEntry(name, time) {
    await prisma.leaderboard.create({
        data: {
            name: name,
            time: time
        }
    })
}

async function getBoard() {
    const leaderboard = await prisma.leaderboard.findMany();
    return leaderboard;
}

module.exports = { postEntry, getBoard }