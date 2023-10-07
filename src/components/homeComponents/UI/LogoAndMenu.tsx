import { Image } from '@chakra-ui/react'
import { Box, Flex, Text } from "@chakra-ui/react"

import Animation from '../../commons/Animation'
import Menu from '../../commons/Menu'

function LogoAndMenu () {
    return(
        <Flex ml="10%" mt="2%" w="100%"  maxH="200px" gap="5%">
            <Animation translateX="-100%">
                <Box boxSize='sm'>
                    <Image 
                        src='https://static.wixstatic.com/media/b877e3_757cb6a4f0394b868ab8aeb35fa1e9e3~mv2.jpeg/v1/fill/w_202,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202022-10-28%20at%2016_20_28.jpeg' 
                        alt='Logo inicial' 
                    />
                </Box>
            </Animation>
            <Animation translateX='100%'>
                <Box flexDirection="row" w="100%">
                    <Menu title='Filosofia'>
                        <Text>Filosofia</Text>
                    </Menu>
                    <Menu title='Galeria de eventos'>
                        <Text>Galeria de eventos</Text>
                    </Menu>
                    <Menu title='Fale conosco'>
                        <Text>Fale conosco</Text>
                    </Menu>
                </Box>
            </Animation>
        </Flex>
    )
}

export default LogoAndMenu