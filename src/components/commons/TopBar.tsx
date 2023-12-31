import { Flex, Text } from "@chakra-ui/react"
import { Link } from '@chakra-ui/react'

import { BsFacebook, BsYoutube } from "react-icons/bs";

function TopBar () {
    return (
        <Flex bg="black" w="100%" alignItems="center">
            <Text ml="5%" fontSize='1.2rem' as='b' color="#ED3135">Taiyokai Associação Taiyo Kai Shotocan - Karatê</Text>
            <Flex alignItems="center" w="50%" height="50px" bg="black" justifyContent="flex-end" pt="3%" pb="3%" pr="5%" gap="2%">
                <Link href='https://www.facebook.com/people/Taiyo-Kai-Shotokan-Karate-Dojo/100063442436136/' isExternal>
                    <BsFacebook style={{color:"#ED3135", cursor:"pointer"}} size={35}/>
                </Link>
                <Link href='https://www.youtube.com/channel/UCoB2mJfn6A2UOOQvtER1NAg' isExternal>
                    <BsYoutube style={{color:"#ED3135", cursor:"pointer"}} size={35}/>
                </Link>
            </Flex>
        </Flex>
    )
}

export default TopBar