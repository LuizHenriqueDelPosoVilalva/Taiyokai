import { Image, Box } from '@chakra-ui/react'

import styles from './ImageInitial.module.css'

function ImageInitial () {
    return (
        <Box className={styles.container}>
            <Image src='https://static.wixstatic.com/media/11062b_3decb74903f14707af111cd78dd60870~mv2.jpg/v1/fill/w_1210,h_511,al_t,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_3decb74903f14707af111cd78dd60870~mv2.jpg' alt='Imagem inicial' w="100%" maxH="400px"/>
        </Box>
    )
}

export default ImageInitial