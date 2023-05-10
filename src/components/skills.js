import { Flex, Text } from "@chakra-ui/react";
import { skills } from "@/components/content";

export default function Skills() {
  return (
    <Flex direction="column">
      <Flex direction="column">
        <Text textDecoration="underline">Languages</Text>
        <Text>
          {skills.languages.map((lang) => {
            return ("| " + lang + " |");
          })}
        </Text>
      </Flex>
      <Flex direction="column">
        <Text textDecoration="underline">Frameworks</Text>
        <Text>
          {skills.frameworks.map((frame) => {
            return ("| " + frame + " |");
          })}
        </Text>
      </Flex>
      <Flex direction="column">
        <Text textDecoration="underline">Libraries</Text>
        <Text>
          {skills.libraries.map((lib) => {
            return ("| " + lib + " |");
          })}
        </Text>
      </Flex>
    </Flex>
  );
}
