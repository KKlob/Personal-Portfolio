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
        >
            <Spacer />
            <Link
                href="https://www.linkedin.com/in/kainklob/"
                rel="noopener noreferrer"
                target="_blank"
                style={{ color: "white" }}
            >
                <Text color="white">LinkedIn</Text>
            </Link>
            <Spacer />
            <Link
                href="https://www.github.com/KKlob"
                rel="noopener noreferrer"
                target="_blank"
                style={{ color: "white" }}
            >
                <Text color="white">GitHub</Text>
            </Link>
            <Spacer />
        </Flex>
    )
}