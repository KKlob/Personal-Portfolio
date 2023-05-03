import {Flex, Text, Code, useOutsideClick} from '@chakra-ui/react';
import commands from '@/components/commands';
import {v4 as uuid} from 'uuid';

export default function Help () {
    return (
        <Flex direction="column">
            <Text>Displaying all commands...</Text>
            {Object.keys(commands).map(key => {
                return (
                    <Flex direction="column" key={uuid()}>
                        <Code>{"> " + key}</Code>
                        <Text marginLeft="25px">{commands[key].description}</Text>
                    </Flex>
                )
            })}
        </Flex>
    )
}