-- CreateTable
CREATE TABLE "leaderboard" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "time" DECIMAL,

    CONSTRAINT "leaderboard_pkey" PRIMARY KEY ("id")
);
