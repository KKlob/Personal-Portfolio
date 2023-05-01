import NextLink from "next/link";
import {
  Flex,
  Link,
  Spacer,
  Circle,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function StaticNavBar({ toggleLink, isDisabled }) {
  const router = useRouter();
  const [width, setWidth] = useState(0);
  console.log("rendering again");

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [setWidth]);

  return (
    <Flex mb="5px" align="center">
      <Circle size={{ base: "12px", md: "18px" }} bg="red" mr="5px" ml="5px" />
      <Circle size={{ base: "12px", md: "18px" }} bg="yellow" mr="5px" />
      <Circle size={{ base: "12px", md: "18px" }} bg="green" mr="5px" />
      <Link
        as={NextLink}
        href="/"
        color="white"
        mr="5px"
        height={{ sm: "20px", md: "26px" }}
        pl="3px"
        pr="3px"
        borderRadius="3px"
        _hover={{ color: "black", bg: "white" }}
        style={{
          backgroundColor: router.pathname == "/" ? "#5b5b5b" : null,
          color: router.pathname == "/" ? "white" : null,
          pointerEvents: isDisabled || router.pathname == "/" ? "none" : "auto",
        }}
        onClick={toggleLink}
      >
        <Text fontSize={{ base: "10px", sm: "13px", md: "16px" }}>
          About Me
        </Text>
      </Link>
      <Link
        as={NextLink}
        href="/skills+experience"
        color="white"
        mr="5px"
        height={{ sm: "20px", md: "26px" }}
        pl="3px"
        pr="3px"
        borderRadius="3px"
        _hover={{ color: "black", bg: "white" }}
        style={{
          backgroundColor:
            router.pathname == "/skills+experience" ? "#5b5b5b" : null,
          color: router.pathname == "/skills+experience" ? "white" : null,
          pointerEvents:
            isDisabled || router.pathname == "/skills+experience"
              ? "none"
              : "auto",
        }}
        onClick={toggleLink}
      >
        <Text fontSize={{ base: "10px", sm: "13px", md: "16px" }}>
          Skills + Experience
        </Text>
      </Link>
      <Link
        as={NextLink}
        href="/projects"
        color="white"
        mr="5px"
        height={{ sm: "20px", md: "26px" }}
        pl="3px"
        pr="3px"
        borderRadius="3px"
        _hover={{ color: "black", bg: "white" }}
        style={{
          backgroundColor: router.pathname == "/projects" ? "#5b5b5b" : null,
          color: router.pathname == "/projects" ? "white" : null,
          pointerEvents:
            isDisabled || router.pathname == "/projects" ? "none" : "auto",
        }}
        onClick={toggleLink}
      >
        <Text fontSize={{ base: "10px", sm: "13px", md: "16px" }}>
          Projects
        </Text>
      </Link>
      <Spacer />
      <Menu>
        {width > 480 ? (
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            height={{ sm: "20px", md: "26px" }}
            pl="10px"
            pr="10px"
            pb="2px"
            border="1px solid white"
            bg="#5b5b5b"
            color="white"
            _hover={{ color: "black", bg: "white"}}
          >
            Contact Info
          </MenuButton>
        ) : (
          <MenuButton
            as={Button}
            height="15px"
            pb="2px"
            border="1px solid white"
            bg="#5b5b5b"
            color="white"
          >
            <ChevronDownIcon />
          </MenuButton>
        )}
        <MenuList
          style={{
            backgroundColor: "#444444",
            borderColor: "#444444",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <MenuItem
            style={{
              backgroundColor: "#5b5b5b",
              width: "auto",
              borderRadius: "5px",
              margin: "-6px 2px 2px 2px",
            }}
          >
            <Link
              href="https://www.linkedin.com/in/kainklob/"
              rel="noopener noreferrer"
              target="_blank"
              style={{ color: "white" }}
            >
              LinkedIn Profile
            </Link>
          </MenuItem>
          <MenuItem
            style={{
              backgroundColor: "#5b5b5b",
              width: "auto",
              borderRadius: "5px",
              margin: "2px 2px -6px 2px",
            }}
          >
            <Link
              href="https://www.github.com/KKlob"
              rel="noopener noreferrer"
              target="_blank"
              style={{ color: "white" }}
            >
              GitHub Profile
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
