import TopBar from "../commons/TopBar"
import LogoAndMenu from "./UI/LogoAndMenu"

import { Flex } from "@chakra-ui/react"

function AppHomePage () {
    return (
        <Flex flexDirection="column" w="100%">
            <TopBar />
            <LogoAndMenu />
        </Flex>
    )
}

export default AppHomePage