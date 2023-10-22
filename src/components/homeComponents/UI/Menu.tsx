import { 
    Card, 
    CardBody, 
    CardFooter, 
    SimpleGrid, 
    Button, 
    Text, 
    Flex } from '@chakra-ui/react'

function Menu () {
    return (
        <Flex maxWidth="100%" mt="-80px" pr="10%" pl="10%">
            <SimpleGrid 
                templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
                display="flex"
                justifyContent="center" 
                alignItems="center"
                flexWrap="wrap"
                w="100%"
            >
                <Card w="25%" minW="200px">
                    <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                    <Button>View here</Button>
                    </CardFooter>
                </Card>
                <Card w="25%" minW="200px">
                    <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                    <Button>View here</Button>
                    </CardFooter>
                </Card>
                <Card w="25%" minW="200px">
                    <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                    <Button>View here</Button>
                    </CardFooter>
                </Card>
                <Card w="25%" minW="200px">
                    <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                    <Button>View here</Button>
                    </CardFooter>
                </Card>
            </SimpleGrid>
        </Flex>
    )
}

export default Menu