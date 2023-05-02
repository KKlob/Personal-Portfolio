import {
  ChakraProvider,
  Box,
  Container,
  Card,
} from "@chakra-ui/react";
import theme from "../styles/theme";
import TopBar from "@/components/topbar";
import ContactFooter from "@/components/contact_footer";

export default function App({ Component, pageProps }) {

  return (
    <div style={{ backgroundColor: "black" }}>
      <ChakraProvider theme={theme}>
        <Box width="100vw" height="100vh" alignItems="center">
            <Container
              paddingTop={{md: "20vh", lg: "25vh"}}
              flexDirection="column"
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
                <Card
                  bg="gray"
                  flex="1"
                  width="100%"
                  alignContent="center"
                  overflowY="scroll"
                  color="white"
                  variant="terminalText"
                >
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
