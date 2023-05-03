// import styles from "../styles/index.module.css";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
import CommandLine from "@/components/command_line";
import { Flex } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Text, Container } from "@chakra-ui/react";
import commands from "@/components/commands";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Help from "@/components/help";

export default function Home() {
  const [userCommand, setUserCommand] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);

  const handleCommandKeyPress = (e) => {
    if (e.key === "Enter" && userCommand != "") {
      let command = userCommand;
      const commandElemnt = <Text color="lightblue">{command}</Text>;
      let response = checkCommand(command);
      if (command.toLowerCase() == "clear") {
        setCommandHistory([]);
      } else {
        if (command.toLowerCase() == "linkedin") {
          setTimeout(() => {window.open(commands.linkedin.url, "LinkedInProfile")}, 1000);
        } else if (command.toLowerCase() == "github") {
          setTimeout(() => {window.open(commands.github.url, "GitHubProfile")}, 1000);
        }
        setCommandHistory([...commandHistory, commandElemnt, response]);
      }
      e.currentTarget.value = "";
      setUserCommand("");
    }
  };

  const checkCommand = (command) => {
    if (Object.keys(commands).includes(command.toLowerCase())) {
      if (command.toLowerCase() == "about") {
        return <About />;
      } else if (command.toLowerCase() == "skills") {
        return <Skills />;
      } else if (command.toLowerCase() == "projects") {
        return <Projects />;
      } else if (command.toLowerCase() == "clear") {
        return <Text>{commands.clear.output}</Text>;
      } else if (command.toLowerCase() == "help") {
        return <Help />;
      } else if (command.toLowerCase() == "linkedin") {
        return <Text>{commands.linkedin.output}</Text>;
      } else if (command.toLowerCase() == "github") {
        return <Text>{commands.github.output}</Text>;
      }
    } else {
      return (
        <Flex direction="column" color="red">
          <Text fontSize={{ base: "12px", md: "15px" }}>
            {"Command '" + command + "' is invalid"}
          </Text>
          <Text fontSize={{ base: "12px", md: "15px" }}>
            Please input a valid command. To see all commands, type {"'help'"}.
          </Text>
        </Flex>
      );
    }
  };

  return (
    <Flex direction="column">
      {commandHistory.map((line) => {
        return (
          <Flex key={uuid()} display="inline-flex">
            <ChevronRightIcon
              pointerEvents="none"
              viewBox="5 5 13 13"
              align="left"
              marginTop="4px"
              marginRight="4px"
            />
            {line}
          </Flex>
        );
      })}
      <CommandLine
        setUserCommand={setUserCommand}
        handleCommandKeyPress={handleCommandKeyPress}
      />
    </Flex>
  );
}
