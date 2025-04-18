import { Box, Text, Button } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";

export default function Timer() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    const timeRef = useRef(0);

    useEffect(() => {
        // in a useeffect so it only runs once

        // setInterval makes a function that will repeat every x milliseconds
        const interval = setInterval(() => {
            // useRef means it wont trigger rerender (we do that once with setState below)
            timeRef.current += 0.1;
            setTime((Math.round(timeRef.current * 10) / 10))
        }, 100);

        // clean up when you leave page / unmount component
        return () => clearInterval(interval);
    },  []);

    return (
        <Box p={6} marginLeft="20px" marginRight="20px">
            <Text textAlign="center">Your time:</Text>
            <Text textAlign="center" fontSize="2rem">{time}</Text>
        </Box>
    )
}