import { Flex, Text } from "@chakra-ui/react";
import {about} from '@/components/content';

export default function About() {
  const fontsize = {base: "12px", md: "15px"}

  return (
    <Flex direction="column">
      <Text fontSize={fontsize}>{about.profesional}</Text>
      <Text fontSize={fontsize}>{about.additional}</Text>
    </Flex>
  );
}
