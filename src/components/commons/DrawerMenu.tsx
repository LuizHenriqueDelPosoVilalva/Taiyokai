import { useRef } from 'react'
import { VscMenu } from "react-icons/vsc";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure
  } from '@chakra-ui/react'

interface Prop {
    children: any
}

 const DrawerMenu: React.FC<Prop> = ({children}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef<HTMLButtonElement>(null)

    return (
        <>
            <Button ref={btnRef}onClick={onOpen} colorScheme="red">
                <VscMenu />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu de opções</DrawerHeader>

                <DrawerBody>
                    {children}
                </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default DrawerMenu