import { Flex, Text, Link, Divider} from "@chakra-ui/react";
import { projects } from "@/components/content";
import { v4 as uuid } from "uuid";

export default function Projects({center=false}) {
  const fontsize = {base: "12px", md: "15px"}
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
            fontSize={fontsize}
            align={center ? "center" : "left"} 
          >
          {proj.name}
          </Link> :
          <Text textDecoration='underline' fontSize={fontsize} align={center ? "center" : "left"} >
            {proj.name}
          </Text>
          }
          <Link href={proj.github} rel="noopener noreferrer" target="_blank" textDecoration="underline" fontSize={fontsize} align={center ? "center" : "left"} >
            GitHub Link
          </Link>
          <Text fontSize={fontsize} align={center ? "center" : "left"} >{proj.summary}</Text>
          <Divider orientation="horizontal" mt="6px"/>
          </Flex>
        );
      })}
    </Flex>
  );
}
