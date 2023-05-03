import { Flex, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function CommandLine({
  setUserCommand,
  handleCommandKeyPress,
  history,
  line,
}) {
  return (
    <Flex direction="column" marginLeft="2px" marginTop="3px">
      <InputGroup bg="gray">
        <InputLeftElement
          height={{ base: "12px", md: "15px" }}
          width={{ base: "12px", md: "15px" }}
          marginTop="4px"
        >
          <ChevronRightIcon
            pointerEvents="none"
            viewBox="5 5 14 14"
            boxSize="100%"
          />
        </InputLeftElement>
          <Input
            type="text"
            variant="unstyled"
            color="white"
            onChange={(e) => setUserCommand(e.currentTarget.value)}
            onKeyPress={handleCommandKeyPress}
            fontSize={{ base: "12px", md: "15px" }}
            paddingLeft="20px"
            bg="gray"
          />
      </InputGroup>
    </Flex>
  );
}
