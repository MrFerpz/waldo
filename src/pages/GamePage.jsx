import Header from "../components/Header"
import MainImage from "../components/MainImage"
import { Link } from "react-router"
import { Button, Flex, Box } from "@chakra-ui/react"
import { createElement, useState } from "react"

export default function GamePage() {
    const [circles, setCircles] = useState([])

    function clickHandle(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const newCircle = drawCircle(mouseX, mouseY);
        setCircles(prev => [...prev, newCircle]);
        console.log([mouseX, mouseY]);
    }

    function drawCircle(x, y) {
        const circle = createElement("div", {style: {
            position: "absolute",
            left: `calc(${x}px - 20px)`,
            top: `calc(${y}px - 20px)`,
            backgroundColor: "black",
            opacity: "0.6",
            height: "40px",
            width: "40px",
            borderRadius: "50px"
         }}
        )
        return circle
    }

    return (
        <section>
            <Header/>
            <Box height="100%">
                <MainImage onClick={clickHandle}/>
                {circles}
            </Box>
            <Flex justifyContent="center">
            <Link to="/"><Button _hover={{bgColor: 'blackAlpha.900', color: "whiteAlpha.900", transform: "scale(1.13)"}} margin="20px" p={6}>Go back</Button></Link>
            </Flex>
        </section>
    )
}