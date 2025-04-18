import { Image } from "@chakra-ui/react"

export default function Character(number) {
    const imageSrcList = [
        "src/assets/characters/BigChungus.png",
        "src/assets/characters/Grim.png",
        "src/assets/characters/Zoidberg.png"
    ]

    return (
        <Image src={imageSrcList[number]} fit="cover" borderRadius="full" boxSize="100px" alt="Character to find"/>
    )
}