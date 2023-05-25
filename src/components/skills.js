import { Flex, Text } from "@chakra-ui/react";
import { skills } from "@/components/content";

export default function Skills({center=false}) {
  const fontsize = {base: "12px", md: "15px"}
  return (
    <Flex direction="column">
      <Flex direction="column">
        <Text textDecoration="underline" fontSize={fontsize} align={center ? "center" : "left"} >Languages</Text>
        <Text fontSize={fontsize} align={center ? "center" : "left"} >
          {skills.languages.map((lang) => {
            return ("| " + lang + " |");
          })}
        </Text>
      </Flex>
      <Flex direction="column">
        <Text textDecoration="underline" fontSize={fontsize} align={center ? "center" : "left"} >Frameworks</Text>
        <Text fontSize={fontsize} align={center ? "center" : "left"} >
          {skills.frameworks.map((frame) => {
            return ("| " + frame + " |");
          })}
        </Text>
      </Flex>
      <Flex direction="column">
        <Text textDecoration="underline" fontSize={fontsize} align={center ? "center" : "left"} >Libraries</Text>
        <Text fontSize={fontsize} align={center ? "center" : "left"} >
          {skills.libraries.map((lib) => {
            return ("| " + lib + " |");
          })}
        </Text>
      </Flex>
    </Flex>
  );
}
