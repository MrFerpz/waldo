import { Box, Flex, Stack, Table, Heading } from "@chakra-ui/react";
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
            console.log(data);
            // put into order of time
            const sortedData = data.sort((a, b) => a.time - b.time);
            setLeaderboard(sortedData);
            } catch(err) {
                console.log(err)
            }}

    leaderboardEntry();
    }, [])

    return (
        <Flex justifyContent="center" alignItems="center">
            <Box width="80vw" marginTop="40px" p={2} bg="blackAlpha.800">
                <Heading textAlign="center" marginTop="10px" marginBottom="10px">LEADERBOARD</Heading>
                <Table.Root showColumnBorder variant="outline">
                    <Table.Header>
                        <Table.Row>
                            <Table.ColumnHeader textAlign="center">Position</Table.ColumnHeader>
                            <Table.ColumnHeader textAlign="center">Name</Table.ColumnHeader>
                            <Table.ColumnHeader textAlign="center">Time</Table.ColumnHeader>
                        </Table.Row>
                    </Table.Header>
                    {leaderboard.map((item, index) => {
                            return <Table.Row key={item.id}>
                                        <Table.Cell textAlign="center">{index + 1}</Table.Cell>
                                        <Table.Cell textAlign="center">{item.name}</Table.Cell>
                                        <Table.Cell textAlign="center">{item.time}</Table.Cell>
                                    </Table.Row>
                    })}
                </Table.Root>
            </Box>
        </Flex>
    )
}