import {
  Flex,
  Circle,
  Center,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Code,
  Stack,
  Divider,
} from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { v4 as uuid } from "uuid";
import { FiChevronRight } from "react-icons/fi";

export default function TopBar() {
  const commands = {
    about: "display Kain's 'About Me'",
    skills: "display Kain's 'Skills and Expereience'",
    projects: "display Kain's 'Projects'",
    linkedin: "open new tab to Kain's LinkedIn profile",
    github: "open new tab to Kain's GitHub profile",
    help: "display the commands available",
  };

  const {isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex marginTop="4px" marginBottom="4px">
      <Circle
        size={{ base: "10px", md: "14px" }}
        marginLeft="5px"
        marginTop="2px"
        bg="red"
      />
      <Circle
        size={{ base: "10px", md: "14px" }}
        marginLeft="5px"
        marginTop="2px"
        bg="yellow"
      />
      <Circle
        size={{ base: "10px", md: "14px" }}
        marginLeft="5px"
        marginTop="2px"
        bg="green"
      />
      <Center flex="1">
        <Text color="white" fontSize={{ base: "9px", md: "12px" }}>
          Kain Klob - Personal Portfolio Terminal
        </Text>
      </Center>
      <QuestionOutlineIcon align="right" marginRight="5px" color="white" onClick={onOpen}/>
      <Modal isOpen={isOpen} onClose={onClose} motionPreset="scale" size={{base: "xs", md: "md", lg: "lg"}}isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader align="center" fontSize={{base: "15px", md: "18px"}}>Welcome to my personal portfolio</ModalHeader>
          <ModalCloseButton size={{base: "sm", md: "md"}}/>
          <Divider orientation="horizontal" />
          <ModalBody align="center" fontSize={{base: "12px", md: "15px"}}>
            <Text>
              If you are looking to contact me, please click on the social media
              links below the terminal window or use the associated command.
            </Text>
            <Divider marginTop="10px" marginBottom="10px" />
            <Text>
                *** Direct Message to come soon ***
            </Text>
            <Divider orientation="horizontal" marginTop="10px" marginBottom="10px"/>
            <Text>Use the following commands to navigate the site</Text>
            <Stack direction="column" align="left" marginTop="2px">
              {Object.keys(commands).map((key) => {
                return <Code align="left" fontSize={{base: "10px", md: "14px"}}key={uuid()}>{key + ": " + commands[key]}</Code>;
              })}
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
