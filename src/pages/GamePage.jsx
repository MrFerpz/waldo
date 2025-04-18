import Header from "../components/Header"
import MainImage from "../components/MainImage"
import { Link } from "react-router"
import { Button, Flex } from "@chakra-ui/react"

export default function GamePage() {
    
    function clickHandle() {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        console.log([mouseX, mouseY]);
    }

    return (
        <section>
            <Header/>
            <MainImage onClick={clickHandle}/>
            <Flex justifyContent="center">
            <Link to="/"><Button _hover={{bgColor: 'blackAlpha.900', color: "whiteAlpha.900", transform: "scale(1.13)"}} margin="20px" p={6}>Go back</Button></Link>
            </Flex>
        </section>
    )
}