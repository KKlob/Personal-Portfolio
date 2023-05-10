import { Flex, Text, Link, Divider} from "@chakra-ui/react";
import { projects } from "@/components/content";
import { v4 as uuid } from "uuid";

export default function Projects() {
  return (
    <Flex direction="column">
      {projects.map((proj) => {
        return (
          <Flex direction="column" mb="6px" key={uuid()}>
            {proj.link != "#" ? 
            <Link
            href={proj.link}
            rel="noopener noreferrer"
            target="_blank"
            textDecoration="underline"
          >
          {proj.name}
          </Link> :
          <Text textDecoration='underline'>
            {proj.name}
          </Text>
          }
          <Link href={proj.github} rel="noopener noreferrer" target="_blank" textDecoration="underline">
            GitHub Link
          </Link>
          <Text>{proj.summary}</Text>
          <Divider orientation="horizontal" mt="6px"/>
          </Flex>
        );
      })}
    </Flex>
  );
}
