import { useRef } from 'react'

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure
  } from '@chakra-ui/react'

interface Prop {
    children: any
    title: string
}

 const DrawerMenu: React.FC<Prop> = ({children, title}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef<HTMLButtonElement>(null)

    return (
        <>
            <Button ref={btnRef} colorScheme='red' onClick={onOpen} w="100%">
                {title}
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