import { Box, Flex } from "@chakra-ui/react"
import Timer from "./Timer"
import Character from "./Character"

export default function Header({time}) {

    return (
        <Box height="150px" bgColor="blue.900" boxShadow="sm">
            <Flex width="100%" alignItems="center" justifyContent="center">
                <Timer time={time}/>
                <Flex justifyContent="center" heihgt="100%" alignItems="center">
                    <Character number={0} name={"Big Chungus"}></Character>
                    <Character number={1} name={"Wallace"}></Character>
                    <Character number={2} name={"Zoidberg"}></Character>
                </Flex>
            </Flex>
        </Box>
    )
}