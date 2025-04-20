import { PrismaClient } from "prisma";

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
    await prisma.leaderboard.findMany()
}

export { postEntry, getBoard }