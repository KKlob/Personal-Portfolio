import {
    Flex,
    Circle,
    Center,
    Text,
} from '@chakra-ui/react';

export default function TopBar() {
    return (
        <Flex marginTop="4px" marginBottom="4px">
            <Circle size={{ base: "10px", md: "14px"}} marginLeft="5px" marginTop="2px" bg="red"/>
            <Circle size={{ base: "10px", md: "14px"}} marginLeft="5px" marginTop="2px" bg="yellow"/>
            <Circle size={{ base: "10px", md: "14px"}} marginLeft="5px" marginTop="2px" bg="green"/>
            <Center flex="1">
                <Text color="white" fontSize={{base: "9px", md: "12px"}}>Kain Klob - Personal Portfolio Terminal</Text>
            </Center>
        </Flex>
    )
}