import { Flex, Text } from "@chakra-ui/react";
import { skills } from "@/components/content";

export default function Skills() {
  const fontsize = {base: "12px", md: "15px"}
  return (
    <Flex direction="column">
      <Flex direction="column">
        <Text textDecoration="underline" fontSize={fontsize}>Languages</Text>
        <Text fontSize={fontsize}>
          {skills.languages.map((lang) => {
            return ("| " + lang + " |");
          })}
        </Text>
      </Flex>
      <Flex direction="column">
        <Text textDecoration="underline" fontSize={fontsize}>Frameworks</Text>
        <Text fontSize={fontsize}>
          {skills.frameworks.map((frame) => {
            return ("| " + frame + " |");
          })}
        </Text>
      </Flex>
      <Flex direction="column">
        <Text textDecoration="underline" fontSize={fontsize}>Libraries</Text>
        <Text fontSize={fontsize}>
          {skills.libraries.map((lib) => {
            return ("| " + lib + " |");
          })}
        </Text>
      </Flex>
    </Flex>
  );
}
