// import "@/styles/globals.css";
import {
  ChakraProvider,
  Box,
  Container,
  AbsoluteCenter,
  Card,
  Center,
} from "@chakra-ui/react";
import theme from "../styles/theme";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import TopBar from "@/components/topbar";
import ContactFooter from "@/components/contact_footer";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // const [isDisabled, setIsDisabled] = useState(false);

  // const toggleLink = () => {
  //   setIsDisabled(!isDisabled);
  //   setTimeout(() => {
  //     setIsDisabled(isDisabled);
  //   }, 1000);
  // };

  return (
    <div style={{ backgroundColor: "black" }}>
      <ChakraProvider theme={theme}>
        <Box width="100vw" height="100vh">
            <Container
              paddingTop={{md: "20vh", lg: "25vh"}}
              flexDirection="column"
              alignItems="center"
              centerContent
            >
              <Card
                bg="#444444"
                flexDirection="column"
                width={{ base: "100vw", md: "80vw", lg: "60vw" }}
                height={{ base: "90vh", md: "60vh", lg: "50vh" }}
                paddingLeft="3px"
                paddingRight="3px"
                paddingBottom="3px"
                borderRadius="5px"
              >
                <TopBar />
                <Card variant="terminalText">
                  <Component {...pageProps} />
                </Card>
              </Card>
              <ContactFooter />
            </Container>
        </Box>
      </ChakraProvider>
    </div>
  );
}
