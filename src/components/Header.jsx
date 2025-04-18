import { Box } from "@chakra-ui/react"

export default function Header() {
    return (
        <Box height="200px">
            <Timer></Timer>
            <Flex>
                <Character number={1}></Character>
                <Character number={2}></Character>
                <Character number={3}></Character>
            </Flex>
        </Box>
    )
}