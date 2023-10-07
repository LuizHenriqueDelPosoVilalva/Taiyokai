import { Image } from '@chakra-ui/react'
import { Box, Flex,  Button, Stack } from "@chakra-ui/react"

import Animation from '../../commons/Animation'

function LogoAndMenu () {
    return(
        <Flex pl="10%" pr ="10%" pt="2%">      
            <Box  mr="10%" boxSize="sm">
                <Animation translateX="-100%" seconds='0.5s'>
                    <Image 
                        src='https://static.wixstatic.com/media/b877e3_757cb6a4f0394b868ab8aeb35fa1e9e3~mv2.jpeg/v1/fill/w_202,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202022-10-28%20at%2016_20_28.jpeg' 
                        alt='Logo inicial'
                    />
                </Animation>
            </Box>
            <Stack direction={['column', 'row']}  w="100%">
                <Animation translateX='100%' seconds='1s'>
                    <Button colorScheme='red' color="black" variant='ghost' m="2%" size='lg'>Inicio</Button>
                    <Button colorScheme='red' color="black" variant='ghost' m="2%" size='lg'>Galeria</Button>
                    <Button colorScheme='red' color="black" variant='ghost' m="2%" size='lg'>Filosofia</Button>
                    <Button colorScheme='red' color="black" variant='ghost' m="2%" size='lg'>Contato</Button>
                    <Button colorScheme='red' color="black" variant='ghost' m="2%" size='lg'>Eventos</Button>
                    <Button colorScheme='red' color="black" variant='ghost' m="2%" size='lg'>Noticias</Button>
                </Animation>
            </Stack>
        </Flex>
    )
}

export default LogoAndMenu