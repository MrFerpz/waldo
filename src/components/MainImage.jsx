import { Image } from "@chakra-ui/react"
import { createElement, useState } from "react"

export default function MainImage() {
    const [circles, setCircles] = useState([])

    function clickHandle(e) {
        const newCircle = drawCircle(e.pageX, e.pageY);
        setCircles(prev => [...prev, newCircle]);
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
        <div>
        <Image onClick={clickHandle} src="src/assets/FindTheCartoon.jpg"/>
        {circles}
        </div>
    )
}