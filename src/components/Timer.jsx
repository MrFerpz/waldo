import { Box, Text, Button } from "@chakra-ui/react";

export default function Timer({time}) {
    return (
        <Box p={6} marginLeft="20px" marginRight="20px">
            <Text textAlign="center">Your time:</Text>
            <Text textAlign="center" fontSize="2rem">{time}</Text>
        </Box>
    )
}