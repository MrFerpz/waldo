import { Image } from "@chakra-ui/react"
import { createElement, useState } from "react"

export default function MainImage({onClick}) {

    return (
        <Image onClick={onClick} src="src/assets/FindTheCartoon.jpg"/>
    )
}