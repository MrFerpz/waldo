import Header from "../components/Header"
import MainImage from "../components/MainImage"
import { Link } from "react-router"
import { Button, Flex, Box } from "@chakra-ui/react"
import { createElement, useState } from "react"
import AnswerForm from "../components/AnswerForm"

export default function GamePage() {
    const [circle, setCircle] = useState([]);
    const [charsToFind, setCharsToFind] = useState(["Big Chungus", "Wallace", "Zoidberg"]);
    const [formVisibility, setFormVisibility] = useState(false);
    const [formPosition, setFormPosition] = useState([0, 0]);

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        const windowDims = { width, height};
        return windowDims;
      }

    // need to add a UseEffect to listen for window resizes and move everything accordingly
    // this will hopefully help me calculate the "winning areas" for every screen size
    // winning areas will likely need to be a dynamic variable with a setState call when resizing window

    // const winningAreas = {
    //     "Big Chungus": {
    //         xMax : 
    //     }
        
    // }

    function onAnswerClick(id) {
        // logic that works out if the chosen character is within +- 50px of the given ranges
    }

    function clickHandle(e) {
        // draw circle
        const windowDims = getWindowDimensions();
        const newCircle = drawCircle(e.pageX, e.pageY);
        setCircle(newCircle);

        // open form
        setFormVisibility(true);
        setFormPosition([e.pageX + 30, e.pageY - 20])
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
            <Box>
                <MainImage onClick={clickHandle}/>
                {circle}
                {formVisibility ? <AnswerForm onAnswerClick={onAnswerClick} charsToFind={charsToFind} xPos={formPosition[0]} yPos={formPosition[1]}/> : ""}
            </Box>
            <Flex justifyContent="center">
            <Link to="/"><Button _hover={{bgColor: 'blackAlpha.900', color: "whiteAlpha.900", transform: "scale(1.13)"}} margin="20px" p={6}>Go back</Button></Link>
            </Flex>
        </section>
    )
}