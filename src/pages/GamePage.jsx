import Header from "../components/Header"
import MainImage from "../components/MainImage"
import { Link } from "react-router"
import { Button, Flex, Box } from "@chakra-ui/react"
import { createElement, useState } from "react"

export default function GamePage() {
    const [circle, setCircle] = useState([])
    const [charsToFind, setCharsToFind] = useState(["Big Chungus", "Wallace", "Zoidberg"])

    function clickHandle(e) {
        // draw circle
        const newCircle = drawCircle(e.pageX, e.pageY);
        setCircle(newCircle);

        // open form
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

    function newForm(charsToFind) {

    }

    return (
        <section>
            <Header/>
            <Box>
                <MainImage onClick={clickHandle}/>
                {circle}
            </Box>
            <Flex justifyContent="center">
            <Link to="/"><Button _hover={{bgColor: 'blackAlpha.900', color: "whiteAlpha.900", transform: "scale(1.13)"}} margin="20px" p={6}>Go back</Button></Link>
            </Flex>
        </section>
    )
}