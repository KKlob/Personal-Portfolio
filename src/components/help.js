import { Flex, Text, Code, useOutsideClick } from "@chakra-ui/react";
import commands from "@/components/commands";
import { v4 as uuid } from "uuid";

export default function Help() {
  const fontsize = {base: "12px", md: "15px"}
  return (
    <Flex direction="column">
      <Text fontSize={fontsize}>Displaying all commands...</Text>
      {Object.keys(commands).map((key) => {
        return (
          <Flex direction="column" key={uuid()}>
            <Code fontSize={fontsize}>{"> " + key}</Code>
            <Text marginLeft="25px" fontSize={fontsize}>{commands[key].description}</Text>
          </Flex>
        );
      })}
    </Flex>
  );
}
