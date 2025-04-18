import { Box, Stack, Flex, Text, Button, StackSeparator } from "@chakra-ui/react"
import { Link } from "react-router"

export default function HomePage() {
    return (
        <Flex flexDirection="column" height="100vh" alignItems="center" justifyContent="center">
            <Box height="200px" width="300px"  bgColor="blue.800" boxShadow="lg" borderRadius="lg" p={6}>
                <Flex flexDirection="column" height="100%" justifyContent="center" alignItems="center">
                <Text fontSize="1.8rem" textAlign="center">Cartoon Hunter</Text>
                <StackSeparator h="20px"></StackSeparator>
                <Link to="/game"><Button _hover={{bgColor: 'blackAlpha.900', color: "whiteAlpha.900", transform: "scale(1.13)"}}>Play!</Button></Link>
                </Flex>
            </Box>
        </Flex>
    )
}