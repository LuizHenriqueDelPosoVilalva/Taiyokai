import { ChakraProvider } from '@chakra-ui/react'

import AppHomePage from '../../components/homeComponents/AppHomePage'

function HomePage () {
    return (
        <ChakraProvider>
            <AppHomePage />
        </ChakraProvider>
    )
}

export default HomePage