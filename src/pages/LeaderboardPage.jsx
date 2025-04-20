import { Box, Flex, Button, Table, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useLocation, Link} from "react-router";

export default function LeaderboardPage() {
    const [leaderboard, setLeaderboard] = useState([]);
    let { name, time } = useParams();
    const location = useLocation();

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

        const leaderboardAccess = async () => {
            try {
                const leaderboardData = await axios.get("http://localhost:3000/leaderboard");
                const data = leaderboardData.data;
                const sortedData = data.sort((a, b) => a.time - b.time);
                setLeaderboard(sortedData);
            } catch(err) {
                console.log(err)
            }
        }
    
    if (location.state?.newScore) {
        leaderboardEntry();
    } else {
        leaderboardAccess();
    }
    }, [])

    return (
        <Flex height="100%" flexDirection="column" justifyContent="center" alignItems="center">
            <Heading marginTop="20px" textAlign="center">LEADERBOARD</Heading>
            <Box width="80vw" marginTop="5px" p={2} bg="blackAlpha.800">
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
            <Link to="/home"><Button width="200px" marginTop="10px">Home</Button></Link>
        </Flex>
    )
}