import { Box, Flex,  Button, Image } from "@chakra-ui/react"

import DrawerMenu from "../../commons/DrawerMenu"



function LogoAndMenu () {
    return(
        <Flex pl="2%" pr="2%" pt="1%" maxH="250px" justifyContent="space-between" alignItems="center">      
            <Box>
                <Image 
                    src='https://static.wixstatic.com/media/b877e3_757cb6a4f0394b868ab8aeb35fa1e9e3~mv2.jpeg/v1/fill/w_202,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202022-10-28%20at%2016_20_28.jpeg' 
                    alt='Logo inicial'
                    sizes="90%"
                />
            </Box>
            <Box>
                <DrawerMenu>
                    <Flex flexDirection="column">
                        <Button colorScheme='red' color="black" variant='ghost' m="2%" size='lg'>Inicio</Button>
                        <Button colorScheme='red' color="black" variant='ghost' m="2%" size='lg'>Galeria</Button>
                        <Button colorScheme='red' color="black" variant='ghost' m="2%" size='lg'>Filosofia</Button>
                        <Button colorScheme='red' color="black" variant='ghost' m="2%" size='lg'>Contato</Button>
                        <Button colorScheme='red' color="black" variant='ghost' m="2%" size='lg'>Eventos</Button>
                        <Button colorScheme='red' color="black" variant='ghost' m="2%" size='lg'>Noticias</Button>
                    </Flex>
                </DrawerMenu>
            </Box>
        </Flex>
    )
}

export default LogoAndMenu