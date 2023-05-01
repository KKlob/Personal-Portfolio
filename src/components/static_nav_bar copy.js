import styles from "../styles/static_nav_bar.module.css";
import Link from "next/link";
import {
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

export default function StaticNavBar({toggleLink, isDisabled}) {
  const router = useRouter();

  return (
    <div>
      <Stack
        direction="horizontal"
        spacing="2"
        style={{ display: "inline-flex" }}
      >
        <div
          className={styles.windowButton}
          style={{ backgroundColor: "red" }}
        ></div>
        <div
          className={styles.windowButton}
          style={{ backgroundColor: "yellow" }}
        ></div>
        <div
          className={styles.windowButton}
          style={{ backgroundColor: "green" }}
        ></div>
        <Link
          href="/"
          className={styles.windowLink}
          style={{
            backgroundColor: router.pathname == "/" ? "#5b5b5b" : null,
            color: router.pathname == "/" ? "white" : null, 
            pointerEvents: isDisabled || router.pathname == "/" ? "none" : "auto",
          }}
          onClick={toggleLink}
        >
          About Me
        </Link>
        <Link
          href="/skills+experience"
          className={styles.windowLink}
          style={{
            backgroundColor: router.pathname == "/skills+experience" ? "#5b5b5b" : null,
            color: router.pathname == "/skills+experience" ? "white" : null,
            pointerEvents: isDisabled || router.pathname == "/skills+experience" ? "none" : "auto",
          }}
          onClick={toggleLink}
        >
          Skills + Experience
        </Link>
        <Link
          href="/projects"
          className={styles.windowLink}
          style={{
            backgroundColor: router.pathname == "/projects" ? "#5b5b5b" : null,
            color: router.pathname == "/projects" ? "white" : null,
            pointerEvents: isDisabled || router.pathname == "/projects" ? "none" : "auto",
          }}
          onClick={toggleLink}
        >
          Projects
        </Link>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            style={{
              height: "20px",
              marginTop: "-10px",
              paddingLeft: "10px",
              paddingRight: "5px",
              paddingBottom: "2px",
              border: "1px solid white",
              backgroundColor: "#5b5b5b",
              color: "white",
            }}
          >
            Contact Info
          </MenuButton>
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
      </Stack>
    </div>
  );
}
