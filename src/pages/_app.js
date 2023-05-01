import StaticNavBar from "@/components/static_nav_bar";
// import "@/styles/globals.css";
import { ChakraProvider, Box, Container, Center, Card } from "@chakra-ui/react";
import theme from "../styles/theme";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";

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
        <Box maxWidth="100vw" maxHeight="100vh">
          <Center>
            <Card variant="terminalWindow">
              <StaticNavBar />
              <Card variant="terminalText">
                <Component {...pageProps} />
              </Card>
            </Card>
          </Center>
        </Box>
      </ChakraProvider>
    </div>
  );
}
