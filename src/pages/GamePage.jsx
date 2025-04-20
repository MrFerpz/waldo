import Header from "../components/Header"
import MainImage from "../components/MainImage"
import { Link } from "react-router"
import { Button, Flex, Box, Text, Container, Input } from "@chakra-ui/react"
import { createElement, useState, useEffect, useRef} from "react"
import AnswerForm from "../components/AnswerForm"
import { Label } from "@chakra-ui/react/dist/types/components/checkbox/namespace"

export default function GamePage() {
    // drawing the popups on-click
    const [formVisibility, setFormVisibility] = useState(false);
    const [formPosition, setFormPosition] = useState([0, 0]);
    const [circle, setCircle] = useState([]);

    // game logic
    const [charsToFind, setCharsToFind] = useState(["Big Chungus", "Wallace", "Zoidberg"]);
    const [coordinates, setCoordinates] = useState([0, 0]);
    const [isWon, setIsWon] = useState(false);

    // timer logic
    const [winningTime, setWinningTime] = useState(0);
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    const timeRef = useRef(0);

    // Timer logic
    useEffect(() => {
        // setInterval makes a function that will repeat every x milliseconds
        const interval = setInterval(() => {
            // useRef means it wont trigger rerender (we do that once with setState below)
            timeRef.current += 0.1;
            setTime((Math.round(timeRef.current * 10) / 10))
        }, 100);

        // clean up when you leave page / unmount component
        return () => clearInterval(interval);
    },  []);

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        const windowDims = { width, height};
        return windowDims;
    }
    
    function checkWin(charsList) {
        console.log(charsToFind);
        if (charsList.length === 0) {
            setIsWon(true);
            setFormVisibility(false);
            setWinningTime(time);
            alert("Good job, you win!");
        }
    }

    const winningRatios = {
        // given as ratios of image dimensions, with y dimension being measured from the top
        "Big Chungus" : { x : 0.683, y : 0.853 },
        "Wallace": { x : 0.508, y : 0.458 },
        "Zoidberg": { x : 0.188, y : 0.716 }
    }

    function onAnswerClick(char) {
        const relevantRatio = winningRatios[char.char];
        const windowDims = getWindowDimensions();
        const winningCoordinate = [(relevantRatio.x * windowDims.width), (relevantRatio.y * windowDims.width + 150)];
        const winningZone = {
             xMin: (winningCoordinate[0] - 75),
             xMax: (winningCoordinate[0] + 75),
             yMin: (winningCoordinate[1] - 75),
             yMax: (winningCoordinate[1] + 75)
            }

            if ((coordinates[0] < winningZone.xMax)
            && (coordinates[0] > winningZone.xMin)
            && (coordinates[1] > winningZone.yMin)
            && (coordinates[1] < winningZone.yMax))
            { 
                alert("Great job!")
                let newCharsToFind = charsToFind;
                let index = newCharsToFind.findIndex((name => name === char.char))
                newCharsToFind.splice(index, 1);
                setCharsToFind(newCharsToFind);
                setFormVisibility(false);
                setCircle([]);
                checkWin(newCharsToFind);
            } else {
                alert("Unfortunately not. Try again!")
                setFormVisibility(false);
                setCircle([]);
            }
         }

    function clickHandle(e) {
        // draw circle
        const newCircle = drawCircle(e.pageX, e.pageY);
        setCircle(newCircle);

        // open form
        setFormVisibility(true);
        setFormPosition([e.pageX + 30, e.pageY - 20]);
        setCoordinates([e.pageX, e.pageY]);
    }

    function drawCircle(x, y) {
        const circle = createElement("div", {style: {
            position: "absolute",
            left: `calc(${x}px - 20px)`,
            top: `calc(${y}px - 20px)`,
            backgroundColor: "black",
            opacity: "0.7",
            border: "2px solid white",
            height: "40px",
            width: "40px",
            borderRadius: "50px"
            }}
        )
        return circle
    }

    return (
        <section>
            { (isWon) ?
            <Flex height="calc(100vh - 150px)" justifyContent="center" alignItems="center" flexDirection="column">
                <Box p={6} bg="blackAlpha.950" boxShadow="md">
                    <Text textAlign="center">Congratulations!</Text>
                    <Text textAlign="center">Your time was {winningTime}.</Text>
                    <Text textAlign="center">Enter your name onto leaderboard!</Text>
                    <form>
                        <Label for="name">Name:</Label>
                        <Input name="name" id="name"></Input>
                    <Link to="leaderboard"><Button type="submit">Submit</Button></Link>
                    </form>
                </Box>
            </Flex>
            :
            <Container>
            <Header time={time}/>
            <Box>
                <MainImage onClick={clickHandle}/>
                {circle}
                {formVisibility ? <AnswerForm onAnswerClick={onAnswerClick} charsToFind={charsToFind} xPos={formPosition[0]} yPos={formPosition[1]}/> : ""}
            </Box>
            </Container>
            }
            <Flex justifyContent="center">
            <Link to="/"><Button _hover={{bgColor: 'blackAlpha.900', color: "whiteAlpha.900", transform: "scale(1.13)"}} margin="20px" p={6}>Go back</Button></Link>
            </Flex>
        </section>
    )
}