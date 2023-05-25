import {
  ChakraProvider,
  Box,
  Container,
  Card,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";
import theme from "../styles/theme";
import TopBar from "@/components/topbar";
import ContactFooter from "@/components/contact_footer";
import { useRef } from "react";
import InputContext from "@/components/inputContext";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";

export default function App({ Component, pageProps }) {
  const inputRef = useRef();

  const { isOpen, onOpen, onClose } = useDisclosure({defaultIsOpen: true});

  const handleTerminalClick = (e) => {
    inputRef.current.focus();
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <ChakraProvider theme={theme}>
        <Box width="100vw" height="100vh" alignItems="center">
          <Container
            paddingTop={{ md: "20vh" }}
            flexDirection="column"
            centerContent
          >
            <Card
              bg="#444444"
              flexDirection="column"
              width={{ base: "100vw", md: "80vw", lg: "60vw" }}
              height={{ base: "90vh", md: "60vh" }}
              paddingLeft="3px"
              paddingRight="3px"
              paddingBottom="3px"
              borderRadius="5px"
            >
              <TopBar />
              <Card
                bg="gray"
                flex="1"
                width="100%"
                alignContent="center"
                overflowY="scroll"
                color="white"
                variant="terminalText"
                onClick={handleTerminalClick}
              >
                <InputContext.Provider value={inputRef}>
                  <Component {...pageProps} />
                  <Modal onClose={onClose} isOpen={isOpen} size="xl" isCentered>
                    <ModalOverlay />
                    <ModalContent alignItems="center">
                      <ModalHeader>Kain Klob</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <About center={true}/>
                        <Divider mt="10px" mb="10px"/>
                        <Skills center={true}/>
                        <Divider mt="10px" mb="10px"/>
                        <Projects center={true}/>
                      </ModalBody>
                    </ModalContent>
                  </Modal>
                </InputContext.Provider>
              </Card>
            </Card>
            <ContactFooter />
          </Container>
        </Box>
      </ChakraProvider>
    </div>
  );
}
