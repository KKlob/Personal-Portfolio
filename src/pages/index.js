// import styles from "../styles/index.module.css";
import { Flex, Text, UnorderedList, ListItem, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {v4 as uuid} from 'uuid';
import {useEffect, useState} from 'react';

export default function Home() {
  const commands = {
    about: "display Kain's 'About Me'",
    skills: "display Kain's 'Skills and Expereience'",
    projects: "display Kain's 'Projects'",
    linkedin: "open new tab to Kain's LinkedIn profile",
    github: "open new tab to Kain's GitHub profile",
    help: "display the commands available",
  };

  const [userCommand, setUserCommand] = useState("");

  const handleCommandKeyPress = (e) => {
    if (e.key === "Enter" && userCommand != "") {
      let command = userCommand;
      console.log(command);
      e.currentTarget.value = "";
      setUserCommand("");
    }
  }

  return (
    <Flex
      direction="column"
      marginLeft="10px"
    >
      <Text>Welcome to my personal portfolio</Text>
      <Text>
        If you are looking to contact me, please click on the social media links
        below the terminal windoiw or use the associated command.
      </Text>
      <Text>Use the following commands to navigate the site:</Text>
      <UnorderedList>
        {Object.keys(commands).map((key) => {
          return (
            <ListItem key={uuid()}>
              {key}: {commands[key]}
            </ListItem>
          )
        })}
      </UnorderedList>
      <InputGroup>
        <InputLeftElement>
          <ChevronRightIcon marginTop="-15px" pointerEvents="none"/>
        </InputLeftElement>
        <Input 
          type="text" 
          variant="unstyled" 
          color="white" 
          onChange={(e) => setUserCommand(e.currentTarget.value)}
          onKeyPress={handleCommandKeyPress}
        />
      </InputGroup>
    </Flex>
  );
}
