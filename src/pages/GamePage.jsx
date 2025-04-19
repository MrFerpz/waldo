import Header from "../components/Header"
import MainImage from "../components/MainImage"
import { Link } from "react-router"
import { Button, Flex, Box, Text, Span } from "@chakra-ui/react"
import { createElement, useState, useEffect} from "react"
import AnswerForm from "../components/AnswerForm"

export default function GamePage() {
    const [circle, setCircle] = useState([]);
    const [charsToFind, setCharsToFind] = useState(["Big Chungus", "Wallace", "Zoidberg"]);
    const [formVisibility, setFormVisibility] = useState(false);
    const [formPosition, setFormPosition] = useState([0, 0]);
    const [coordinates, setCoordinates] = useState([0, 0]);
    const [isWon, setIsWon] = useState(false);
    const [winningTime, setWinningTime] = useState(0);

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        const windowDims = { width, height};
        return windowDims;
    }
    
    function checkWin() {
        if (charsToFind.length === 0) {
            setIsWon(true);
            setFormVisibility(false);
            alert("Good job, you win!");
        }
    }

    useEffect(() => {
            checkWin();
        }, [charsToFind]
       )

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
            <Header/>
            { (isWon) ?
            <Flex height="calc(100vh - 150px)" justifyContent="center" alignItems="center" flexDirection="column">
                <Box p={6} bg="blackAlpha.950" boxShadow="md">
                    <Text textAlign="center">Congratulations</Text>
                    <Text textAlign="center">Your time was "time"</Text>
                    <Text textAlign="center">Did you make it onto the <Link color="blue" to="leaderboard">leaderboard</Link>?</Text>
                </Box>
            </Flex>
            :
            <Box>
                <MainImage onClick={clickHandle}/>
                {circle}
                {formVisibility ? <AnswerForm onAnswerClick={onAnswerClick} charsToFind={charsToFind} xPos={formPosition[0]} yPos={formPosition[1]}/> : ""}
            </Box>
            }
            <Flex justifyContent="center">
            <Link to="/"><Button _hover={{bgColor: 'blackAlpha.900', color: "whiteAlpha.900", transform: "scale(1.13)"}} margin="20px" p={6}>Go back</Button></Link>
            </Flex>
        </section>
    )
}