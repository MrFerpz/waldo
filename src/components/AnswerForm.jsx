import { Stack, Box, Separator, Button, Text } from "@chakra-ui/react"

export default function AnswerForm({charsToFind, xPos, yPos, onAnswerClick}) {
    return (
        <Box bg="blackAlpha.950" p={1} position="absolute" left={xPos} top={yPos}>
            {charsToFind.map((char, index) => (
                <Stack>
                    <Button _hover={{bg: "green.700"}} id={char} onClick={() => onAnswerClick({char})}  color="whiteAlpha.950" bgColor="blackAlpha.950" size="sm" key={index}>{char}</Button>
                </Stack>
            ))}
        </Box>
    )
}