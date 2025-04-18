import Header from "../components/Header"
import MainImage from "../components/MainImage"
import { Link } from "react-router"
import { Button, Flex, Box } from "@chakra-ui/react"
import { createElement, useState } from "react"

export default function GamePage() {

    return (
        <section>
            <Header/>
            <Box>
                    <MainImage/>
            </Box>
            <Flex justifyContent="center">
            <Link to="/"><Button _hover={{bgColor: 'blackAlpha.900', color: "whiteAlpha.900", transform: "scale(1.13)"}} margin="20px" p={6}>Go back</Button></Link>
            </Flex>
        </section>
    )
}