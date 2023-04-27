import StaticNavBar from "@/components/static_nav_bar";
// import "@/styles/globals.css";
import { ChakraProvider, Card } from "@chakra-ui/react";
import theme from "../styles/theme";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const [isDisabled, setIsDisabled] = useState(false);

  const toggleLink = () => {
    setIsDisabled(!isDisabled);
    setTimeout(() => {
      setIsDisabled(isDisabled);
    }, 1000);
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <ChakraProvider theme={theme}>
        <Card variant="terminalWindow" align="left">
          <StaticNavBar toggleLink={toggleLink} isDisabled={isDisabled} />
          <Card variant="terminalText">
            <AnimatePresence mode="wait">
              <motion.div
                key={router.route}
                initial="initialState"
                animate="animateState"
                exit="exitState"
                transition={{
                  duration: 0.5,
                }}
                variants={{
                  initialState: {
                    opacity: 1,
                    clipPath: "inset(0 0 100% 0)",
                  },
                  animateState: {
                    opacity: 1,
                    clipPath: "inset(0 0 0 0)",
                    overflowY: "scroll",
                  },
                  exitState: {
                    opacity: 1,
                    clipPath: "inset(0 0 100% 0)",
                  },
                }}
              >
                <Component {...pageProps} />
              </motion.div>
            </AnimatePresence>
          </Card>
        </Card>
      </ChakraProvider>
    </div>
  );
}
