import { useRef } from "react"
import { useInView } from "framer-motion"

import { Flex, Box } from "@chakra-ui/react"

interface Prop {
    children: any
    translateX: string
}

const Animation: React.FC<Prop> = ({children, translateX}) => {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true });
    return (
        <Flex ref={ref} w="100%">
            <Box
                style={{
                    transform: isInView ? "none" : `translateX(${translateX})`,
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }} 
            >
                {children}
            </Box>
        </Flex>
    )
}

export default Animation