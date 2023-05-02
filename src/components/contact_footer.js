import {
    Flex,
    Link,
    Text,
    Spacer,
} from '@chakra-ui/react';

export default function ContactFooter () {
    return (
        <Flex 
            width={{ base: "100vw", md: "80vw", lg: "60vw" }}
            marginTop="10px"
        >
            <Spacer />
            <Link
                href="https://www.linkedin.com/in/kainklob/"
                rel="noopener noreferrer"
                target="_blank"
                color="white"
                bg="gray"
                borderRadius="25px"
                paddingLeft="15px"
                paddingRight="15px"
                border="1px solid white"
            >
                <Text color="white">LinkedIn</Text>
            </Link>
            <Spacer />
            <Link
                href="https://www.github.com/KKlob"
                rel="noopener noreferrer"
                target="_blank"
                color="white"
                bg="gray"
                borderRadius="25px"
                paddingLeft="15px"
                paddingRight="15px"
                border="1px solid white"
            >
                <Text color="white">GitHub</Text>
            </Link>
            <Spacer />
        </Flex>
    )
}