import { Flex, Text } from "@chakra-ui/react";
import {about} from '@/components/content';

export default function About() {
  return (
    <Flex direction="column">
      <Text>{about.profesional}</Text>
      <Text>{about.additional}</Text>
    </Flex>
  );
}
