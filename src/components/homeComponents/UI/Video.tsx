import { Flex } from "@chakra-ui/react"

function Video () {
  return (
    <Flex>
      <video width="100%" height="100%" controls>
        <source src="../../../assets/taiyokai.mp4" />
      </video>
    </Flex>
  )
}

export default Video
