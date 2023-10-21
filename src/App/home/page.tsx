import { ChakraProvider } from '@chakra-ui/react'
import '../../../node_modules/video-react/dist/video-react.css'

import AppHomePage from '../../components/homeComponents/AppHomePage'

function HomePage () {
    return (
        <ChakraProvider>
            <AppHomePage />
        </ChakraProvider>
    )
}

export default HomePage