import { Image, Box } from '@chakra-ui/react'
import { motion } from "framer-motion";

import styles from './ImageInitial.module.css'

function ImageInitial () {
    return (
        <motion.div 
            className={styles.container}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            <Image src='https://static.wixstatic.com/media/11062b_3decb74903f14707af111cd78dd60870~mv2.jpg/v1/fill/w_1210,h_511,al_t,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_3decb74903f14707af111cd78dd60870~mv2.jpg' alt='Imagem inicial' w="100%" maxH="400px"/>
        </motion.div>
    )
}

export default ImageInitial