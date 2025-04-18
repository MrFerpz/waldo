import { Image, Box, Text } from "@chakra-ui/react"

export default function Character({number, name}) {

    const imageSrcList = [
        "../src/assets/characters/Big Chungus.png",
        "../src/assets/characters/Wallace.png",
        "../src/assets/characters/Zoidberg.png"
    ]

    return (
        <Box p={5}>
            <Image src={imageSrcList[number]} fit="cover" borderRadius="full" boxSize="80px" alt="Character to find"/>
            <Text textAlign="center">{name}</Text>
        </Box>
    )
}