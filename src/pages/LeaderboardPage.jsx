import { Box, Stack, Table } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function LeaderboardPage() {
    const [leaderboard, setLeaderboard] = useState([]);
    let { name, time } = useParams();

    useEffect(() => {
        // post to leaderboard and retrieve data
        const leaderboardEntry = async () => {
            try {
                const leaderboardData = await axios.post(`http://localhost:3000/leaderboard`, {
                    name: name,
                    time: time
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            const data = leaderboardData.data;
            console.log(data)
            setLeaderboard(data);
            } catch(err) {
                console.log(err)
            }}

    leaderboardEntry();
    }, [])

    return (
        <Box>
            <Table.Root>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeader>Name</Table.ColumnHeader>
                        <Table.ColumnHeader>Time</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                {leaderboard.map(item => {
                        return <Table.Row key={item.id}>
                                    <Table.Cell>{item.name}</Table.Cell>
                                    <Table.Cell>{item.time}</Table.Cell>
                                </Table.Row>
                })}
            </Table.Root>
        </Box>
    )
}