import { Box, Stack } from "@chakra-ui/react";
import axios from "axios";

export default function LeaderboardPage({time}) {

    useEffect(() => {
        // get leaderboard data before posting anything
        const leaderboardData = axios.get("http://localhost:5432/leaderboard", {
            headers: {
                'Content-Type': 'application/json'
            }})
        const leaderboard = leaderboardData.data;
        return leaderboard;
    }, [])

    useEffect(() => {
        // get leaderboard data
        const leaderboardData = axios.post("http://localhost:5432/leaderboard", {
            name: name,
            time: time
            }, { headers: {
                'Content-Type': 'application/json'
            }})
        const leaderboard = leaderboardData.data;
    }, [name])

    return (
        <Box>
            <Text></Text>
            {leaderboard}
        </Box>
    )
}