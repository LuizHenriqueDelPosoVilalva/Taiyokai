import { Box, Flex,  Button, Image, Spacer } from "@chakra-ui/react"

import DrawerMenu from "../../commons/DrawerMenu"

import styles from "./LogoAndMenu.module.css"

function LogoAndMenu () {
    return(
        <Flex pl="2%" pr="2%" pt="1%" maxH="250px" mb="2%" alignItems="center">     
            <Image 
                src='https://static.wixstatic.com/media/b877e3_757cb6a4f0394b868ab8aeb35fa1e9e3~mv2.jpeg/v1/fill/w_202,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202022-10-28%20at%2016_20_28.jpeg' 
                alt='Logo inicial'
                className={styles.logo}
            />
            <Image 
                src='https://jkabrasil.com.br/wp-content/uploads/2023/07/Logotipo-JKA-Brasil-horizontal-2.png' 
                alt='Logo inicial 2'
                className={styles.logo2}
            />
            <Spacer />
            <Box className={styles.drawerMenu}>
                <DrawerMenu>
                    <Flex flexDirection="column">
                        <Button colorScheme='red' color="black" variant='ghost' m="2%" size='lg'>Inicio</Button>
                        <Button colorScheme='red' color="black" variant='ghost' m="2%" size='lg'>Filosofia</Button>
                        <Button colorScheme='red' color="black" variant='ghost' m="2%" size='lg'>Galeria</Button>
                        <Button colorScheme='red' color="black" variant='ghost' m="2%" size='lg'>Noticias</Button>
                    </Flex>
                </DrawerMenu>
            </Box>
            <Box className={styles.menu}>
                <Button fontSize="1rem"colorScheme='red' color="black" variant='ghost' size='lg'>
                    Inicio
                </Button>
                <Button fontSize="1rem" colorScheme='red' color="black" variant='ghost' size='lg'>
                    Filosofia
                </Button>
                <Button fontSize="1rem" colorScheme='red' color="black" variant='ghost' size='lg'>
                    Galeria
                </Button>
                <Button fontSize="1rem" colorScheme='red' color="black" variant='ghost' size='lg'>
                    Noticias
                </Button>
            </Box>
        </Flex>
    )
}

export default LogoAndMenu