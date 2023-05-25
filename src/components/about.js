import { Flex, Text } from "@chakra-ui/react";
import {about} from '@/components/content';

export default function About({center=false}) {
  const fontsize = {base: "12px", md: "15px"}

  return (
    <Flex direction="column">
      <Text align={center ? "center" : "left"} fontSize={fontsize}>{about.profesional}</Text>
      <Text align={center ? "center" : "left"} fontSize={fontsize}>{about.additional}</Text>
    </Flex>
  );
}
