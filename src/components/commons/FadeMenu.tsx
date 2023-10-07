import { Fade, useDisclosure, Button } from '@chakra-ui/react'

interface Prop {
    title: string,
    children: any
}

const FadeMenu: React.FC<Prop> =  ({title, children}) => {
    const { isOpen, onToggle } = useDisclosure()
    return(
        <>
            <Button onClick={onToggle} w="100%" fontSize=".7rem">{title}</Button>
            <Fade in={isOpen}>
                {children}
            </Fade>
        </>
    )
}

export default FadeMenu