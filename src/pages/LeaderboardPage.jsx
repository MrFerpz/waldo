import { Box, Stack } from "@chakra-ui/react";
import axios from "axios";

export default function LeaderboardPage({time, user}) {

    const newEntry = axios.post("http://localhost:5432/leaderboard");
    const response = axios.get("http://localhost:5432/leaderboard");

    return (
        <Box>
            
        </Box>
    )
}