import { Box } from "@chakra-ui/react"

export default function Header() {
    return (
        <Box height="200px">
            <Timer></Timer>
            <Flex>
                <Character name={xyz}></Character>
                <Character name={xyz}></Character>
                <Character name={xyz}></Character>
            </Flex>
        </Box>
    )
}